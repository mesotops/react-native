import React from 'react';
import {View, Image} from 'react-native';

class homePage extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={{
            width: 410,
            height: 750,
            resizeMode: 'stretch',
            backgroundColor: '#C0C0C0',
          }}
          source={require('./img/background.jpg')}
        />
      </View>
    );
  }
}

export default homePage;
