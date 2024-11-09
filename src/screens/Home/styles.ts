import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 8,
    alignItems: "center",
    gap: 8,
  },
  textInput: {
    borderWidth: 0.5,
    padding: 8,
    borderRadius: 4,
    borderColor: "gray",
    flex: 1,
  },
  clearButton: {
    position: "absolute",
    right: 40,
  },
  drinkItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10,
    margin: 4,
    gap: 4,
  },
  drinkThumb: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },
  errorMessage: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
    paddingTop: 12,
  },
});
