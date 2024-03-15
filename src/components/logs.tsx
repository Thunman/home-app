import { useContext, useEffect, useState } from "react";
import { getLogs } from "../backendInteractions/backendControls";
import { AuthContext } from "../hooks/authContext";
import { ScrollView, Text } from "react-native";
import { styles } from "../styles/stylesheet";

const Logs = () => {
	const { backendServiceProvider } = useContext(AuthContext);
	const [logs, setLogs] = useState("");
	useEffect(() => {
		const getData = async () => {
			const data = await backendServiceProvider(getLogs);
			setLogs(data.data.logs);
		};
		getData();
	}, []);
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.logText}>{logs}</Text>
		</ScrollView>
	);
};
export default Logs;
