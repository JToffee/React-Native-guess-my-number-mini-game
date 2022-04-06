import {
	Text,
	View,
	Image,
	StyleSheet,
	useWindowDimensions,
	ScrollView,
} from "react-native";
import Colors from "../util/constants";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
	const { width, height } = useWindowDimensions();

	let imageSize = 300;

	if (width < 370) {
		imageSize = 150;
	}
	if (height < 370) {
		imageSize = 80;
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	};
	return (
		<ScrollView style={styles.screen}>
			<View style={styles.rootContainer}>
				<Title>Game Over!</Title>
				<View style={[styles.imageContainer, imageStyle]}>
					<Image
						source={require("../assets/images/success.jpg")}
						style={styles.image}
					></Image>
				</View>
				<Text style={styles.summaryText}>
					Your phone needed{" "}
					<Text style={styles.hightlight}>{roundsNumber + " "}</Text>
					rounds to guess the number{" "}
					<Text style={styles.hightlight}>{userNumber}</Text>.
				</Text>
				<PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
			</View>
		</ScrollView>
	);
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		// width: deviceWidth < 360 ? 150 : 300,
		// height: deviceWidth < 360 ? 150 : 300,
		// borderRadius: deviceWidth < 360 ? 75 : 150,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: "hidden",
		margin: 36,
	},
	image: {
		width: "100%",
		height: "100%",
	},
	summaryText: {
		fontFamily: "open-sans",
		fontSize: 20,
		textAlign: "center",
		marginBottom: 24,
	},
	hightlight: {
		fontFamily: "open-sans-bold",
		color: Colors.primary700,
	},
});
