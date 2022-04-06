import { View, Text, StyleSheet } from "react-native";
import Colors from "../../util/constants";
function GuessLogItem({ roundNumber, guess }) {
	return (
		<View style={styles.listItem}>
			<Text style={styles.itemText}>#{roundNumber}</Text>
			<Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
		</View>
	);
}

export default GuessLogItem;

const styles = StyleSheet.create({
	listItem: {
		borderColor: Colors.primary800,
		borderWidth: 1,
		borderRadius: 40,
		padding: 3,
		marginVertical: 8,
		backgroundColor: Colors.accent500,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 3,
	},
	itemText: {
		fontFamily: "open-sans",
		padding: 10,
	},
});
