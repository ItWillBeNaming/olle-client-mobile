import { Image, Pressable, StyleSheet, View } from "react-native";

function SocialLoginButton({ source }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <Image style={styles.image} source={source} />
      </Pressable>
    </View>
  );
}

export default SocialLoginButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  buttonContainer: {
    width: "25%",
    height: "100%",
  },
  image: {
    width: 50,
    height: 50,
  },
});
