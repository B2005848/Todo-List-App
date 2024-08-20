import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "#eaddcf",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },

  square: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#fffffe",
    alignItems: "center",
    justifyContent: "center",
  },

  even: {
    backgroundColor: "#f7f7f7",
  },
  odd: {
    backgroundColor: "#f25042",
  },

  No: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#716040",
  },

  nameTodo: {
    fontSize: 15,
    color: "#716040",
    width: "80%",
  },
});

export default styles;
