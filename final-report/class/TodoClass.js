import React from 'react';
import {StyleSheet, View, Switch, TextInput, Button, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Picker} from '@react-native-picker/picker';
import content from './buttondata';
import CourseList from './CourseList';
export default class TodoClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 初始待辦類型
      content: content,
      course: 'all',
    };
  }
  handleChangeType = value => {
    this.setState({
      course: value,
    });
    Actions.push('TodoList', {course: value});
  };

  render() {
    const {course, content} = this.state;

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.item}></View>
          <CourseList content={content} handleToggle={this.handleChangeType} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  item: {
    justifyContent: 'center',
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  picker: {
    width: 150,
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
    marginLeft: 15,
  },
  switch: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'red',
  },
});
