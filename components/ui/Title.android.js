import { StyleSheet, Text, Dimensions, Platform } from "react-native";

function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontFamily: "open-sans-bold",
		fontSize: 24,
		color: "white",
		textAlign: "center",
		// borderWidth: Platform.OS === "android" ? 0 : 3,
		borderWidth: 2,
		borderColor: "white",
		padding: 12,
		marginTop: 20,
		maxWidth: "80%",
	},
});
