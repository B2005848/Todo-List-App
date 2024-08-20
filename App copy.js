import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>SHINE ON YOU</Text>
        <Text>Ứng dụng đặt lịch nhanh chóng và dễ dàng</Text>
      </View>
      <TextInput
        secureTextEntry={false}
        style={styles.input}
        placeholder="Số điện thoại đăng kí"
      />
      <TextInput
        secureTextEntry={true} // Ẩn mật khẩu
        style={styles.input}
        placeholder="Mật khẩu của bạn"
      />

      <Button
        style={styles.button}
        title="Đăng nhập"
        onPress={() => console.log("Đăng nhập thành công")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },

  input: {
    height: 40,
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 13,
    padding: 10,
    marginTop: 20,
  },
});
