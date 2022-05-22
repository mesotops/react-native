import React from 'react';
import { StyleSheet, Dimensions, Image, View, Text } from 'react-native';

const ClassDetail = (props) => {
  const { todo } = props;

  return (
    <View>
      <View style={styles.mealContent}>
        <Text style={styles.mealName}>{todo.title}!</Text>
        <Text style={styles.mealPrice}>{todo.target}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mealList: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width / 2,
  },
  mealContent: {
    marginLeft: 10,
  },
  mealName: {
    textAlign: 'center',
    fontFamily: 'Microsoft JhengHei',
    fontSize: 28,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingVertical: 3,
  },
  mealPrice: {
    fontSize: 22,
    fontFamily: 'Microsoft JhengHei',
    paddingBottom: 10,
  },
  mealDesc: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ClassDetail;
