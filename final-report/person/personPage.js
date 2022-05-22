import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import TodoItem from './personItem';
import userData from '../userData';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class TodoList extends Component {
  // 宣告 Todo 資料
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.user,
    };
  }

  getName = async value => {
    const {todos} = this.state;
    const {user} = this.props;
    try {
      const name = await AsyncStorage.getItem('@name_key');
      const email = await AsyncStorage.getItem('@email_key');
      const studentclass = await AsyncStorage.getItem('@class_key');
      if (name !== null) {
        this.setState({
          todos: [
            {
              id: value[0].id,
              userId: value[0].userId,
              name: name,
              email: email,
              studentclass: studentclass,
              url: value[0].url,
            },
          ],
        });
      }
    } catch (e) {
      // error reading value
    }
  };
  componentDidMount() {
    const {todos} = this.state;
    this.props.navigation.setParams({
      rightTitle: '修改',
      onRight: () => {
        Actions.personForm({
          handleUpdateTodo: this.handleUpdateTodo,
          todos: todos,
        });
      },
    });
  }

  handleUpdateTodo = todo => {
    this.getName(todo);
    console.log(todo);
  };

  render() {
    const {todos} = this.state;
    // this.getId();
    return (
      <View style={styles.container}>
        <View style={styles.todoitem}>
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // 分割畫面區塊
    backgroundColor: '#F4F4F4', // 版面背景顏色
  },
  todoitem: {
    alignItems: 'center',
    marginHorizontal: 10, // TodoItems 整個區塊的左右外距大小
  },
  divider: {
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    paddingVertical: 10,
  },
});
