import { StatusBar } from "expo-status-bar";
import Login from "./src/components/login";
import { View } from "react-native";
import { styles } from "./src/styles/stylesheet";
import { AuthProvider } from "./src/hooks/authContext";

export default function App() {
	return (
		<AuthProvider>
			<View style={styles.background}>
				<Login />
				<StatusBar style="auto" />
			</View>
		</AuthProvider>
	);
}
