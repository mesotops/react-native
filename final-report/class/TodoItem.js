import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import aiImg from './image/data-sharing.png';
import bigImg from './image/data-cluster-line.png';
import cloudImg from './image/cloud-database-tree.png';
import mkImg from './image/clipboard-data.png';
import bookImg from './image/book-alt.png';
import urImg from './image/urgent.png';
import allImg from './image/all.png';

const translateType = course => {
  switch (course) {
    case 'other':
      return '系上必修';
    case 'marketing':
      return '創意行銷';
    case 'ai':
      return '物聯網';
    case 'bigdata':
      return '智慧金融';
    case 'cloud':
      return '智慧雲端';
    case 'normal':
      return '一般課程';
    default:
      return '所有課程';
  }
};
const translateTime = time => {
  switch (time) {
    case '1':
      return '一上';
    case '2':
      return '一下';
    case '3':
      return '二上';
    case '4':
      return '二下';
    case '5':
      return '三上';
    case '6':
      return '三下';
    case '7':
      return '四上';
    case '8':
      return '四下';
    default:
      return '無此類別';
  }
};
const compareTime = time => {
  switch (time) {
    case '1':
      return 1;
    case '2':
      return 2;
    case '3':
      return 3;
    case '4':
      return 4;
    case '5':
      return 5;
    case '6':
      return 6;
    case '7':
      return 7;
    case '8':
      return 8;
    default:
      return '無此類別';
  }
};

export default function TodoItem(props) {
  const {
    todo: {id, course, type, title, subTitle, time, completed},
    onPress,
  } = props;

  return (
    <TouchableOpacity
      onPress={() => onPress(id)}
      // 根據完成狀態呈現不同的左框線顏色樣式
      style={[styles.content, styles.unCompletedBorder]}>
      <View style={styles.imageContent}>
        <Image
          // 根據完成狀態顯示不同的待辦項目圖示
          source={
            translateType(course) === '創意行銷'
              ? mkImg
              : translateType(course) === '一般課程'
              ? bookImg
              : translateType(course) === '智慧金融'
              ? bigImg
              : translateType(course) === '智慧雲端'
              ? cloudImg
              : translateType(course) === '物聯網'
              ? aiImg
              : translateType(course) === '系上必修'
              ? urImg
              : allImg
          }
          style={styles.image}
        />
      </View>
      <View style={styles.todoContent}>
        <View>
          {/* 根據完成狀態顯示不同的標題樣式 */}
          <Text style={styles.unCompletedTitle}>{title}</Text>
          <Text style={styles.subTitle}>教授:{subTitle}</Text>
        </View>
        <View>
          <View style={styles.tagView}>
            {/* 將 type 傳入定義的函示對應顯示中文類型文字 */}
            <Text style={styles.tagText}>{translateType(course)}</Text>
          </View>
          <Text
            style={
              compareTime(time) < 3 && completed === false
                ? styles.time
                : styles.time
            }>
            {translateTime(time)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row', // 每個 TodoItem 區塊透過水平方向排列
    alignItems: 'center', // 垂直置中
    backgroundColor: '#FFF', // 區塊內的背景顏色
    borderLeftWidth: 5, // 左邊框線粗細
    borderRadius: 2, // 框線圓角弧度
    marginVertical: 5, // 區塊上下垂直外距大小
    padding: 10, // 區塊四周內距大小
    elevation: 5, // 陰影深淺
  },
  unCompletedBorder: {
    borderLeftColor: '#5E4B56', // 左框線顏色
  },
  imageContent: {
    flex: 0.1, // 圖示區塊大小
  },
  image: {width: 30, height: 30}, // 圖示大小
  todoContent: {
    flex: 0.9, // 待辦內容區塊大小
    flexDirection: 'row', // 待辦內容透過水平方向排列
    justifyContent: 'space-between', // 待辦內容左右貼齊排列
    alignItems: 'center', // 待辦內容交叉軸置中（垂直方向）
  },
  unCompletedTitle: {
    color: '#32373B',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    fontFamily: 'Microsoft JhengHei',
  },
  subTitle: {
    fontSize: 14, // 子標題文字大小
    color: '#5E4B56', // 子標題文字顏色
    paddingTop: 7,
    fontFamily: 'Microsoft JhengHei', // 區塊上下內距大小
  },
  tagView: {
    alignSelf: 'flex-start', // 自己本身元素排列方向
    backgroundColor: '#6FAED8', // 背景顏色
    paddingHorizontal: 7, // 區塊左右內距大小
    paddingVertical: 3, // 區塊上下內距大小
    borderRadius: 5, // 邊框圓角
  },
  tagText: {
    color: 'white', // 類型文字顏色
    fontSize: 16,
    fontFamily: 'Microsoft JhengHei', // 類型文字大小
  },
  time: {
    color: 'gray', // 時間文字顏色
    paddingTop: 7, // 區塊上下內距大小
    textAlign: 'right', // 靠右對齊
    fontFamily: 'Microsoft JhengHei',
  },
});
