import { Pressable, StyleSheet, Text, View } from "react-native";

function Button({ children, style, onPress }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
      >
        <View style={[styles.buttonContainer, style && style]}>
          <Text style={[styles.text, style && styles.blackText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonContainer: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
    borderRadius: 4,
  },
  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  blackText: {
    color: "black",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
});
