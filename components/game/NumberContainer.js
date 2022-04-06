import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../util/constants";
function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: deviceWidth < 360 ? 12 : 20,
		margin: deviceWidth < 360 ? 12 : 24,
		marginTop: deviceWidth < 360 ? 24 : 30,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
		minWidth: "20%",
		alignSelf: "center",
	},
	numberText: {
		color: Colors.accent500,
		fontSize: deviceWidth < 360 ? 26 : 30,
		// fontWeight: "bold",
		fontFamily: "open-sans-bold",
	},
});
