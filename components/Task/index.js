import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const Task = (props) => {
  const { number } = props;
  const numberText = number < 10 ? `0${number}` : number;
  const itemBg = number % 2 === 0 ? styles.even : styles.odd;
  return (
    <TouchableOpacity onPress={props.onDeleteTask}>
      <View style={styles.item}>
        <View style={[styles.square, itemBg]}>
          <Text style={styles.No}>{numberText}</Text>
        </View>
        <Text style={styles.nameTodo}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
