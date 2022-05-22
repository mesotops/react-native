import React from 'react';
import {StyleSheet, View, TextInput, Button, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // 初始待辦類型
      userId: null,
      name: null,
      // 待辦備註
      email: null,
      // 待辦是否完成
      studentclass: null,
    };
  }
  NameData = async value => {
    try {
      await AsyncStorage.setItem('@name_key', value);
    } catch (e) {
      // saving error
    }
  };
  EmailData = async value => {
    try {
      await AsyncStorage.setItem('@email_key', value);
    } catch (e) {
      // saving error
    }
  };
  ClassData = async value => {
    try {
      await AsyncStorage.setItem('@class_key', value);
    } catch (e) {
      // saving error
    }
  };
  // 變更待辦類型的選取值
  handleChangeName = text => {
    this.setState({
      name: text,
    });
    this.NameData(text);
  };

  // 變更待辦標題的文字
  handleChangeEmail = text => {
    this.setState({
      email: text,
    });
    this.EmailData(text);
  };

  // 變更待辦備註的文字
  handleChangeClass = text => {
    this.setState({
      studentclass: text,
    });
    this.ClassData(text);
  };
  handleUpdatePress = () => {
    const {handleUpdateTodo, todos} = this.props;
    console.log(todos);
    // 返回前一個頁面
    Actions.pop({user: todos});
    // 呼叫子元件所傳入的事件並將表單的輸入內容帶入參數回傳回去
    handleUpdateTodo(todos);
    // 新增待辦事項後將表單設定回到初始預設值
    this.setState({
      name: null,
      email: null,
      studentclass: null,
    });
  };
  render() {
    const {name, email, studentclass} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.label}>修改</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>姓名</Text>
          <TextInput
            value={name}
            onChangeText={this.handleChangeName}
            style={styles.textInput}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>email</Text>
          <TextInput
            value={email}
            onChangeText={this.handleChangeEmail}
            style={styles.textInput}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>班級</Text>
          <TextInput
            value={studentclass}
            onChangeText={this.handleChangeClass}
            style={styles.textInput}
          />
        </View>
        <Button
          title="確認"
          disabled={!name || !email}
          onPress={this.handleUpdatePress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EEE',
  },
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
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
});
