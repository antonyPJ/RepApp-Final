import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  adminRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: 16,
  },

  adminText: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 10,
    flexShrink: 1,
  },

  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  yesButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#007AFF",
    marginRight: 10,
  },

  noButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF3B30",
  },

  buttonSelected: {
    backgroundColor: "#E0E0E0",
  },

  yesText: {
    color: "#007AFF",
    fontWeight: "bold",
  },

  noText: {
    color: "#FF3B30",
    fontWeight: "bold",
  },

  textSelected: {
    color: "#000",
  },
});
