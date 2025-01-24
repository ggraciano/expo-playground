import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { StyleSheet } from "react-native-unistyles";

import { Button } from "@/components/button";

export default function Index() {
  const [disabled, setDisabled] = useState(false);

  return (
    <View style={styles.container}>
      <Button disabled={disabled}>Styled button</Button>
      <Pressable
        style={styles.button}
        onPress={() => setDisabled((value) => !value)}
      >
        <Text>{disabled ? "Enable 👆" : "Disable 👆"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  button: {
    padding: 4,
    backgroundColor: "white",
    borderRadius: 4,
  },
});
