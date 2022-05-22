import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import TodoItem from './TodoItem';
import classtodos from './classdata';
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: classtodos,
      displayStatus: 'all',
    };
  }
  translateType = course => {
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
  componentDidMount() {
    const {course} = this.props;
    const {translateType} = this;
    this.props.navigation.setParams({
      title: translateType(course),
      rightTitle: '詳細資料',
      onRight: () => {
        Actions.push('TodoForm', {course: course});
      },
    });
  }

  // handlePress = id => {
  //   const newTodos = this.state.todos.map(todo => {
  //     return todo.id === id ? {...todo} : todo;
  //   });

  //   this.setState({
  //     todos: newTodos,
  //   });
  // };

  handleRedirectMealDetail = id => {
    const {todos} = this.state;
    const todo = todos.find(todo => todo.id === id);
    console.log(todo.id);

    // 跳轉至餐點詳細頁面時將底部的 Tab 隱藏
    Actions.push('ClassDetail', {todo: todo});
  };

  handleGetDisplayedTodos = () => {
    const {course} = this.props;

    const {todos} = this.state;
    switch (course) {
      case 'other':
        return todos.filter(todo => {
          return todo.course === 'other';
        });
      case 'marketing':
        return todos.filter(todo => {
          return todo.course === 'marketing';
        });
      case 'ai':
        return todos.filter(todo => {
          return todo.course === 'ai';
        });
      case 'bigdata':
        return todos.filter(todo => {
          return todo.course === 'bigdata';
        });
      case 'cloud':
        return todos.filter(todo => {
          return todo.course === 'cloud';
        });
      case 'normal':
        return todos.filter(todo => {
          return todo.course === 'normal';
        });
      default:
        return todos;
    }
  };
  handleAddTodo = todo => {
    const {todos} = this.state;
    this.setState({
      todos: [
        ...todos,
        {
          id: todos.length + 1,
          ...todo,
        },
      ],
    });
  };

  render() {
    const displayTodos = this.handleGetDisplayedTodos();
    // 透過 filter 函式將原陣列（todos）中的元素逐個過濾判斷「是否完成狀態」後回傳一個新陣列
    const unCompletedTodos = displayTodos.filter(
      todo => todo.completed === false,
    );
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.todoItems}>
              {unCompletedTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onPress={this.handleRedirectMealDetail}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 分割畫面區塊
    backgroundColor: '#FBF1EE', // 版面背景顏色
  },
  todoTitle: {
    color: '#4A5859',
    fontSize: 20, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    padding: 10, // 上下垂直內聚大小
  },
  todoItems: {
    marginHorizontal: 10, // TodoItems 整個區塊的左右外距大小
  },
});
