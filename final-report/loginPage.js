import React from 'react';
import {StyleSheet, Button, View, TextInput, Text, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userData from './userData';

class loginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: userData,
      text: '',
      password: '',
      users: userData,
    };
  }

  //帳號值
  handleChangeText = Text => {
    this.setState({
      text: Text,
    });
  };

  //密碼值
  handleChangePassword = Text => {
    this.setState({
      password: Text,
    });
  };

  //到首頁
  handleRedirectHomePage = () => {
    const {users, text, password} = this.state;
    this.idData(text);
    const id = users.filter(user => {
      return text === user.userId ? user.id : '';
    });
    id.length === 0
      ? id.push({id: users.length + 1, userId: ''})
      : console.log('ok');
    id.map(user => {
      return text === user.userId
        ? password === user.userpassword
          ? Actions.reset('homePage')
          : Alert.alert('密碼錯誤', '請重新輸入密碼', [
              {
                text: '確定',
              },
            ])
        : Alert.alert('帳號錯誤', '請重新輸入帳號', [
            {
              text: '確定',
            },
          ]);
    });
  };

  idData = async value => {
    try {
      await AsyncStorage.setItem('@id_key', value);
    } catch (e) {
      // saving error
    }
  };

  render() {
    const {text, password} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>登入驗證</Text>

        <View style={styles.logbox}>
          <Text>帳號</Text>
          <TextInput
            keyboardType="default"
            value={text}
            onChangeText={this.handleChangeText}
            style={styles.textInput}
          />

          <Text>密碼</Text>
          <TextInput
            keyboardType="default"
            secureTextEntry
            value={password}
            onChangeText={this.handleChangePassword}
            style={styles.textInput}
          />

          <Text></Text>
          <Button
            title="login"
            color="#841584"
            disabled={!text || !password}
            onPress={this.handleRedirectHomePage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center', // 標題文字置中
    fontSize: 25, // 標題文字大小
    fontWeight: 'bold', // 標題文字粗細
    paddingVertical: 10, // 上下垂直內聚大小
  },

  logbox: {
    width: 250,
    height: 250,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default loginPage;
