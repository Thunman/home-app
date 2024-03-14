import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	background: {
		backgroundColor: "#343434",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	styledText: {
		color: "white",
	},
	inputField: {
		color: "green",
		backgroundColor: "#fff",
		width: 250,
		height: 50,
		borderWidth: 3,
		borderRadius: 8,
		borderColor: "grey",
		padding: 5,
		marginBottom: 10,
		elevation: 50,
	},
	loginButton: {
		backgroundColor: "black",
		width: 250,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 3,
		borderRadius: 8,
		borderColor: "grey",
		shadowColor: "#fff",
		shadowOffset: { width: 10, height: 10 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 50,
	},
	text: {
		color: "white",
	},
});
