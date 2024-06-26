import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({ onPress, children }) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={styles.buttonInnerContainer}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  buttonInnerContainer: {
    width: 50,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "black",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
