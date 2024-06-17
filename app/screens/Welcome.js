import { StyleSheet } from "react-native";

function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
