import { StyleSheet, Text, View } from "react-native";
import { Fonts } from "../../../constants/Colors/Fonts";

function Title({ children }) {
  return (
    <View style={styles.container}>
      <Text style={Fonts.Header}>{children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 3,
  },
});
