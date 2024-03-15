import { StatusBar } from "expo-status-bar";
import Login from "./src/components/login";
import { View } from "react-native";
import { styles } from "./src/styles/stylesheet";
import { AuthProvider } from "./src/hooks/authContext";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/components/home";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	const Stack = createStackNavigator();
	return (
		<AuthProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</AuthProvider>
	);
}
