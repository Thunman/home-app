import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/stylesheet";
import { AuthContext } from "../hooks/authContext";
import { useContext, useEffect, useState } from "react";
import {
	getStatusOffBackend,
	hibernatePC,
	startMongo,
	stopMongo,
	wakePC,
} from "../backendInteractions/backendControls";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../helpers/interfaces";
import { logout } from "../backendInteractions/auth";

type NavigationProp = StackNavigationProp<RootStackParamList, "Logs">;

export const Home = () => {
	const [mongoStatus, setMongoStatus] = useState(false);
	const [mainPCStatus, setMainPCStatus] = useState(false);
	const { backendServiceProvider, setIsLoggedIn } = useContext(AuthContext);
	const navigator = useNavigation<NavigationProp>();
	const handleMongoPress = async () => {
		let response;
		if (mongoStatus) {
			response = await backendServiceProvider(stopMongo);
			if (response.success) setMongoStatus(true);
			else alert(response.message);
		} else {
			response = await backendServiceProvider(startMongo);
			if (response.success) setMongoStatus(true);
			else alert(response.message);
		}
		if (!response.success) alert(response.message);
	};
	const handlePCPress = async () => {
		let response;
		if (mongoStatus) {
			response = await backendServiceProvider(hibernatePC);
			if (response.success) setMainPCStatus(true);
			else alert(response.message);
		} else {
			response = await backendServiceProvider(wakePC);
			if (response.success) setMainPCStatus(true);
			else alert(response.message);
		}
		if (!response.success) alert(response.message);
	};
	const handleLogsPress = async () => {
		navigator.navigate("Logs");
	};
	const handleLogoutPress = async () => {
		const response = await backendServiceProvider(logout);
		if (response.success) setIsLoggedIn(false);
		else alert(response.message);
	};
	useEffect(() => {
		const getStatus = async () => {
			const response = await backendServiceProvider(getStatusOffBackend);
			if (response.success) {
				setMainPCStatus(response.data.pc);
				setMongoStatus(response.data.mongo);
			} else alert(response.message);
		};
		getStatus();
	}, [mongoStatus, mainPCStatus]);
	return (
		<View style={styles.homeBackground}>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.controlButton}
					onPress={handleMongoPress}
				>
					{mongoStatus ? (
						<Text style={styles.styledText}>Mongo running</Text>
					) : (
						<Text style={styles.styledText}>Mongo stopped</Text>
					)}
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.controlButton}
					onPress={handlePCPress}
				>
					{mainPCStatus ? (
						<Text style={styles.styledText}>PC running</Text>
					) : (
						<Text style={styles.styledText}>PC hibernating</Text>
					)}
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.controlButton}
					onPress={handleLogsPress}
				>
					<Text style={styles.styledText}>Logs</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.controlButton}>
					<Text style={styles.styledText}></Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.controlButton}>
					<Text style={styles.styledText}></Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.controlButton}>
					<Text style={styles.styledText}></Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.controlButton}>
					<Text style={styles.styledText}></Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.controlButton}
					onPress={handleLogoutPress}
				>
					<Text style={styles.styledText}>Log out</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Home;
