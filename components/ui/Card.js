import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../util/constants";
function Card({ children }) {
	return <View style={styles.card}>{children}</View>;
}

export default Card;
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	card: {
		alignItems: "center",
		padding: 16,
		marginTop: deviceWidth < 360 ? 15 : 30,
		marginHorizontal: 24,
		borderRadius: 8,
		backgroundColor: Colors.primary800,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
});
