import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';

/**
 * 設備項目
 * TODO: 實作設備項目內容及其點擊觸發的對應操作事件
 * Tip:
 *     1. 可多善用條件運算式的技巧，判斷設備狀態文字是否加入樣式設定
 */
const CourseItem = (props) => {
  /**
   * TODO: 此處僅為提供顯示設備項目而撰寫的範例，請自行實作產生每個設備項目
   */
  const { content, onPress } = props;
  return (
    <TouchableOpacity onPress={() => onPress(content.value)}>
      <View style={styles.deviceItemOpened}>
        <Image source={content.icon} style={styles.deviceImg} />
        <Text style={styles.deviceName}>{content.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deviceItemOpened: {
    borderRadius: 25,
    backgroundColor: '#FBF1EE',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 150,
    marginHorizontal: 10,
    marginBottom: 20,
    elevation: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
  deviceImg: {
    width: 55,
    height: 60,
  },
  deviceItemClosed: {
    backgroundColor: '#AAA',
    justifyContent: 'center',
    alignItems: 'center',
    width: 110,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    elevation: 10,
  },
  deviceName: {
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Microsoft JhengHei',
    fontSize: 15,
  },
  deviceStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lightOpened: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'green',
  },
  lightClosed: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'gray',
  },
  lightTextOpened: {
    fontSize: 12,
    paddingLeft: 5,
    color: 'green',
  },
  lightTextClosed: {
    fontSize: 12,
    paddingLeft: 5,
    color: 'gray',
  },
});

export default CourseItem;
