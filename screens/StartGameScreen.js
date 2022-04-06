import {
	View,
	TextInput,
	StyleSheet,
	Alert,
	useWindowDimensions,
	KeyboardAvoidingView,
	ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../util/constants";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
	const [enteredNumber, setEnteredNumber] = useState("");

	const { width, height } = useWindowDimensions();
	// get user input
	function numberInputHandler(enteredText) {
		setEnteredNumber(enteredText);
	}

	//Reset text input
	function resetInputHandler() {
		setEnteredNumber("");
	}

	//Handle user input
	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber <= 0) {
			Alert.alert("Invalid number", "Number should be between 1 and 100", [
				{ text: "OKAY", style: "destructive", onPress: resetInputHandler },
			]);
			return;
		}

		onPickNumber(chosenNumber);
	}
	const marginTopDistance = height < 370 ? 30 : 100;

	return (
		<ScrollView style={styles.screen}>
			<KeyboardAvoidingView style={styles.screen} behavior="position">
				<View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
					<Title>Guess my number</Title>
					<Card>
						<InstructionText>Enter a number</InstructionText>
						<TextInput
							underlineColorAndroid="transparent"
							maxLength={2}
							style={styles.numberInput}
							keyboardType="number-pad"
							autoCapitalize="none"
							autoCorrect={false}
							value={enteredNumber}
							onChangeText={numberInputHandler}
						/>
						<View style={styles.buttonsContainer}>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
							</View>
							<View style={styles.buttonContainer}>
								<PrimaryButton onPress={confirmInputHandler}>
									Confirm
								</PrimaryButton>
							</View>
						</View>
					</Card>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}
export default StartGameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	rootContainer: {
		flex: 1,
		alignItems: "center",
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: Colors.accent500,
		borderBottomWidth: 2,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsContainer: {
		flexDirection: "row",
		marginTop: 25,
	},
	buttonContainer: {
		flex: 1,
	},
});
