import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/stylesheet";
import { useState, useContext } from "react";
import { AuthContext } from "../hooks/authContext";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { loginServiceProvider } = useContext(AuthContext);
	const handleLogin = async () => {
		const response = await loginServiceProvider(login, username, password);
	};
	return (
		<>
			<TextInput
				style={styles.inputField}
				placeholder="Username"
			></TextInput>
			<TextInput
				style={styles.inputField}
				placeholder="Password"
			></TextInput>
			<TouchableOpacity onPressIn={handleLogin} style={styles.loginButton}>
				<Text style={styles.text}>Login</Text>
			</TouchableOpacity>
		</>
	);
};
export default Login;
