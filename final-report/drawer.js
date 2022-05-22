import React, {useReducer} from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {Actions} from 'react-native-router-flux';
import userData from './userData';
import AsyncStorage from '@react-native-async-storage/async-storage';
class drawer extends React.Component {
  handleRedirectHomePage = () => {
    Actions.currentScene !== 'homePage'
      ? Actions.push('homePage')
      : Actions.drawerClose();
  };
  getId = async () => {
    try {
      const id = await AsyncStorage.getItem('@id_key');
      console.log(id);
      const user = userData.filter(todo => todo.userId === id);
      Actions.push('personPage', {user: user});
    } catch (e) {}
  };
  handleRedirectPersonPage = () => {
    Actions.push('personPage');
  };

  handleRedirectClassPage = () => {
    Actions.push('TodoClass');
  };

  handleRedirectListPage = () => {
    Actions.push('Curriculum');
  };

  handleRedirectLoginPage = () => {
    Actions.reset('loginPage');
  };

  render() {
    return (
      <View style={styles.drawer}>
        <View style={styles.drawTitleView}>
          <Text style={styles.drawTitleText}>Hellow </Text>
          <TouchableOpacity onPress={() => Actions.drawerClose()}>
            <Image
              source={{uri: 'https://i.imgur.com/7TQkIts.png'}}
              style={styles.cancelImage}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={this.handleRedirectHomePage}>
          <Text style={styles.drawerItemText}>首頁</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.drawerItemView} onPress={this.getId}>
          <Text style={styles.drawerItemText}>個人中心</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.drawerItemView}
          onPress={this.handleRedirectClassPage}>
          <Text style={styles.drawerItemText}>學程介紹</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.drawerItemView}
          onPress={this.handleRedirectListPage}>
          <Text style={styles.drawerItemText}>學期課表</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity onPress={this.handleRedirectLoginPage}>
          <Text style={styles.drawerItemText}>登出</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawer: {
    margin: 10,
  },
  drawTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  drawTitleText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  cancelImage: {
    width: 20,
    height: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
  },
  drawerItemView: {
    marginVertical: 10,
  },
  drawerItemText: {
    fontSize: 16,
  },
});

export default drawer;
