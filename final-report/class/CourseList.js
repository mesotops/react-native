import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import DeviceItem from './CourseItem.js';

/**
 * 設備列表
 * TODO: 實作產生多個設備項目
 * Tip:
 *     1. 可善用 array.map() 產生多個設備項目
 */
const CourseList = props => {
  const {content, handleToggle} = props;
  return (
    <ScrollView contentContainerStyle={styles.content}>
      {/* <View style={styles.content}> */}
      {content.map(content => (
        <DeviceItem key={content.id} content={content} onPress={handleToggle} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default CourseList;
