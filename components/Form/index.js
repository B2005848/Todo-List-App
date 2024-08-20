import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import styles from "../Form/style";

// using props
export default function Form(props) {
  const [Task, setTask] = useState("");
  const handleAddTask = () => {
    if (Task.length === 0) {
      alert("Please enter a task !");
      return false;
    }
    props.onAddTask(Task);
    setTask("");
    Keyboard.dismiss;
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
      style={styles.addTask}
    >
      <TextInput
        value={Task}
        onChangeText={(text) => setTask(text)}
        style={styles.textInput}
        placeholder="Your task"
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
