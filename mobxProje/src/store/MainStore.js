import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { observable, action } from 'mobx';

class MainStore {

  @observable buttonTitle1 = 'Giriş Yap';

  @action backButtonIcon() {
    Actions.reset('main');
  }

  @action showBackButton(props) {
    if (props === 'profil' || props === 'kayit') {
       return (
          <TouchableOpacity style={styles.backButtonIcon} onPress={() => this.backButtonIcon(props)}>
            <View>
              <Icon name='undo' color='#212121' size={40} />
            </View>
        </TouchableOpacity>
      );
    }
  }

  @action registerButton() {
      Actions.reset('registerUser');
  }
}

const styles = StyleSheet.create({
  backButtonIcon: {
    position: 'absolute',
    left: 10,
    margin: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }

});

export default new MainStore();
