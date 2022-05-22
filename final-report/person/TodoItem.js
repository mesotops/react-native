import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function TodoItem(props) {
  return (
    <View style={styles.content}>
      <View>
        <Image style={styles.image} source={{uri: props.todo.url}} />
        <Text style={styles.studentid}>學號:{props.todo.studentid}</Text>
        <Text style={styles.name}>姓名:{props.todo.name}</Text>
        <Text style={styles.email}>email:{props.todo.email}</Text>
        <Text style={styles.studentclass}>班級:{props.todo.studentclass}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row', // 每個 TodoItem 區塊透過水平方向排列
    alignItems: 'center', // 垂直置中
  },
  image: {
    width: 80,
    height: 80,
  },
  studentid: {
    fontSize: 35, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    lineHeight: 100,
  },
  name: {
    fontSize: 35, // 子標題文字大小
    fontWeight: 'bold',
    lineHeight: 100,
  },
  email: {
    fontSize: 35, // 子標題文字大小
    fontWeight: 'bold',
    lineHeight: 100,
  },
  studentclass: {
    fontSize: 35, // 子標題文字大小
    fontWeight: 'bold',
    lineHeight: 100,
  },
});
