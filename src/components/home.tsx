import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/stylesheet";

export const Home = () => {
	const handleMongoPress = async () => {};
	const handlePCPress = async () => {};
	const handleLogsPress = async () => {};
	const handleLogoutPress = async () => {};

	return (
		<View style={styles.homeBackground}>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.controlButton}
					onPress={handleMongoPress}
				>
					<Text style={styles.styledText}>MongoDB</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.controlButton}
					onPress={handlePCPress}
				>
					<Text style={styles.styledText}>MainPC</Text>
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
