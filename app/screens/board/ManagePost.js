/**
 * 게시글 작성, 수정 화면
 */

import { StyleSheet, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function ManagePost() {
  return (
    <KeyboardAwareScrollView style={styles.root}>
      <View>
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.title}
            placeholder="제목을 입력해주세요."
            maxLength={255}
          />
        </View>
        <View style={styles.contentContainer}>
          <TextInput
            style={styles.content}
            placeholder="내용을 입력해주세요."
            multiline={true}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default ManagePost;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  titleContainer: {
    borderBottomWidth: 1,
    margin: 20,
    paddingBottom: 10,
    borderColor: "#DEDEDE",
  },
  title: {
    fontFamily: "Pretendard-Medium",
    fontSize: 25,
  },
  contentContainer: {
    marginLeft: 20,
    marginTop: 10,
  },
  content: {
    fontFamily: "Pretendard-Light",
    fontSize: 20,
    lineHeight: 30,
  },
});
