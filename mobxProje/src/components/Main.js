import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import { Buttontext } from '../partner';
import Header from './parts/Header';

@inject('MainStore')
@observer

class Main extends Component {

  render() {
    const { MainStore } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ flex: 1 }}>
           <Header />
        </View>
        <View style={styles.mainView}>
            <Buttontext
              onPress={() => MainStore.registerButton()}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
              textStyle={{
                fontSize: 25,
                backgroundColor: '#fa6496',
                color: '#fff',
                padding: 10,
              }}
              title={MainStore.buttonTitle1}
            />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainView: {
    flex: 13,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default Main;
