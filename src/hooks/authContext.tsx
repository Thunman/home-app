import { createContext, useState } from "react";
import {
	IAuthContext,
	IAuthProvider,
	IBackendInteraction,
	ILoginFunction,
	IResponse,
} from "../helpers/interfaces";
import { AxiosResponse } from "axios";

export const AuthContext = createContext<IAuthContext>({
	isLoggedIn: false,
	setIsLoggedIn: () => {},
	backendServiceProvider: async (_: IBackendInteraction) => {
		return { success: false, message: "", data: {} };
	},
	loginServiceProvider: async (_: ILoginFunction, __: string, ___: string) => {
		return { success: false, message: "", data: {} };
	},
});

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginServiceProvider = async (
		func: ILoginFunction,
		username: string,
		password: string
	): Promise<IResponse> => {
		const response = await func(username, password);
		if (response.ok) {
			setIsLoggedIn(true);
		}
		const responseData = await response.json();
		return responseData;
	};

	const backendServiceProvider = async (
		func: IBackendInteraction
	): Promise<IResponse> => {
		const response = await func();
		if (response.status === 401) {
			setIsLoggedIn(false);
		}
		console.log("res: ", response.status);
		const responseData = await response.json();
		return responseData;
	};
	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				loginServiceProvider,
				backendServiceProvider,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
