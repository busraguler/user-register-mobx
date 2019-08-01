import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Icon } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

@inject('MainStore', 'UserStore')
@observer
class Header extends Component {

  showSettingsButton() {
    const { UserStore } = this.props;
    UserStore.userToken();
  }

  render() {
    const { MainStore } = this.props;
    return (
      <View style={styles.containerStyle}>
          { MainStore.showBackButton(this.props.headerTitle) }
         <TouchableOpacity style={styles.settingsButtonIcon} onPress={() => this.showSettingsButton()}>
           <View>
             <Icon name='settings' color='#212121' size={30} />
           </View>
         </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  headerTitle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  settingsButtonIcon: {
    position: 'absolute',
    right: 10,
    margin: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default Header;
