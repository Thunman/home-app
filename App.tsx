import Login from "./src/components/login";
import { AuthProvider } from "./src/hooks/authContext";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/components/home";
import { NavigationContainer } from "@react-navigation/native";
import Logs from "./src/components/logs";

export default function App() {
	const Stack = createStackNavigator();
	return (
		<AuthProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Login"
						component={Login}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Home"
						component={Home}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Logs"
						component={Logs}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</AuthProvider>
	);
}
