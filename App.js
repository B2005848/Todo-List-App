import { Text, View, ScrollView, Alert } from "react-native";
import React, { useState } from "react";

import Task from "./components/Task/index";
import Form from "./components/Form";
import styles from "./App.components.style";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (Task) => {
    // add task
    setTaskList([...taskList, Task]);
    alert(Task);
  };

  const handleDeleteTask = (index) => {
    // delete task
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          let taskListTmp = [...taskList];
          taskListTmp.splice(index, 1);
          setTaskList(taskListTmp);
          alert("Delete this taks success !");
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      {/* body */}
      <View style={styles.body}>
        {/* header */}
        <Text style={styles.header}>Todo List</Text>
        {/* Item list */}
        <ScrollView style={styles.items}>
          {taskList.map((task, index) => {
            return (
              <Task
                key={index}
                title={task}
                number={index + 1}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })}
        </ScrollView>
      </View>

      {/* input */}
      <Form onAddTask={handleAddTask} />
    </View>
  );
}
