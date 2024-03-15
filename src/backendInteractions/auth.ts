import axios from "axios";

export const login = async (username: string, password: string) => {
	console.log("name ", username);
	console.log("pass ", password);
	const response = await axios.post(
		"https://thunman.servebeer.com/api/users/login",
		{
			username: username,
			password: password,
		}
	);
	return response;
};
