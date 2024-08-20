import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  addTask: {
    bottom: 20,
    paddingHorizontal: 18,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    height: 40,
    borderWidth: 2,
    borderRadius: 13,
    borderColor: "#8c7851",
    width: "80%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  iconWapper: {
    width: 44,
    height: 44,
    backgroundColor: "#8c7851",
    borderRadius: 44,
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    fontSize: 24,
    color: "#fff",
  },
});

export default styles;
