import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({
  keyboardType,
  placeholder,
  secure,
  textContentType,
  returnKeyType,
  onChangeText,
  value,
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secure}
        textContentType={textContentType}
        returnKeyType={returnKeyType}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: "#F5F5F5",
    borderRadius: 4,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
});
