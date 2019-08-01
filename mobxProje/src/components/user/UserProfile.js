import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import Header from '../parts/Header';
import { CardSection, Input } from '../../partner';

@inject('UserStore')
@observer
class UserProfile extends Component {

  componentWillMount() {
   const { UserStore } = this.props;
    UserStore.userInfo();
  }

  updateButton() {
    const { UserStore } = this.props;
    return (
      <TouchableOpacity onPress={() => UserStore.updateSetValueAsyncStorage()} style={styles.buttonView}>
        <Text style={styles.buttonTitle}> GÜNCELLE </Text>
      </TouchableOpacity>
    );
  }

  confirm() {
    const { UserStore } = this.props;
    if (UserStore.userPasswordCard === 1) {
      return (
        <CardSection>
          <Input
            secureTextEntry={UserStore.confirmPlaceholder === 'Tekrar parola' ? true : false}
            placeholder={UserStore.confirmPlaceholder}
            style={styles.textInput}
            value={UserStore.confirmSetValue}
            onChangeText={confirmSetValue => UserStore.changeConfirmSetValue(confirmSetValue)}
          />
        </CardSection>
      );
    }
  }

  showItemCard() {
    const { UserStore } = this.props;
    if (UserStore.userPasswordCard === 1 || UserStore.apiUrlCard === 1 || UserStore.userEmailCard === 1) {
        return (
          <View>
            <CardSection>
              <Input
                secureTextEntry={UserStore.newPlaceholder === 'Yeni parola' ? true : false}
                placeholder={UserStore.newPlaceholder}
                style={styles.textInput}
                value={UserStore.newSetValue}
                onChangeText={newSetValue => UserStore.changeNewSetValue(newSetValue)}
              />
            </CardSection>
              {this.confirm()}
            <CardSection>
               {this.updateButton()}
            </CardSection>
          </View>
        );
    }
  }

  render() {
    const { UserStore } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Header headerTitle={'profil'} />
        </View>
        <View style={{ flex: 13 }}>
          <ScrollView>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 10 }}>
              <Icon name='chevron-right' color='#444444' size={30} />
              <Text style={{ fontSize: 22, color: '#444444', letterSpacing: 1 }}>Kullanıcı Profili</Text>
            </View>
            <View style={styles.mainContainer}>
               <View style={styles.avatarStyle}>
                 <Avatar
                   size="large"
                   rounded
                   icon={{ name: 'user', type: 'font-awesome' }}
                 />
               </View>
               <View style={styles.userInfoStyle}>
                 <Text style={{ color: '#333333', fontSize: 18 }}>{UserStore.userEmail}</Text>
                 <View style={{ flexDirection: 'row', marginTop: 10 }}>
                   <Icon name='link' color='#6A6C6F' size={20} />
                   <Text style={{ color: '#6A6C6F', fontSize: 15 }}>{UserStore.apiUrl}</Text>
                 </View>
               </View>
            </View>
            <View style={styles.mainContainer}>
               <View style={{ flexDirection: 'row' }} >
                 <Icon name='settings' color='#444444' size={30} />
                 <Text style={{ color: '#444444', fontSize: 20 }}>Bilgi Güncelleme</Text>
               </View>
               <View style={{ borderWidth: 1, borderColor: '#f4f4f4', marginTop: 20, marginBottom: 20 }}></View>
               <TouchableOpacity style={{ width: '100%', flexDirection: 'row' }} onPress={() => UserStore.removeAsyncStorage()} >
                 <Icon name='delete' color='#444444' size={20} />
                 <Text style={{ color: '#444444', fontSize: 17 }}>Kaydı Sil</Text>
               </TouchableOpacity>
               <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                 <TouchableOpacity style={{ width: '100%' }} onPress={() => UserStore.showuserEmailCard()} >
                    <Text style={styles.updateTexyStyle}>E-posta</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{ width: '100%' }} onPress={() => UserStore.showUserPasswordCard()} >
                    <Text style={styles.updateTexyStyle}>Parola</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={{ width: '100%' }} onPress={() => UserStore.showApiUrlCard()} >
                    <Text style={styles.updateTexyStyle}>Api Url</Text>
                 </TouchableOpacity>
               </View>
               <View style={{ borderWidth: 1, borderColor: '#f4f4f4', marginTop: 20, marginBottom: 20 }}></View>
               {this.showItemCard()}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    margin: 15,
    borderWidth: 7,
    borderRadius: 6,
    borderColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: '#fff',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20
  },
  avatarStyle: {
    alignItems: 'center'
  },
  userInfoStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20
  },
  updateTexyStyle: {
    textAlign: 'center',
    marginTop: 10,
    padding: 10,
    color: '#fa6496',
    fontSize: 17,
    backgroundColor: '#EEEEEE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    fontWeight: '300',
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#f4f4f4',
    fontFamily: 'Raleway sans-serif',
    color: '#6A6C6F',
    fontWeight: '300',
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 17,
    lineHeight: 15,
    flex: 2
  },
  buttonView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTitle: {
    letterSpacing: 0,
    flex: 0,
    backgroundColor: '#fa6496',
    borderRadius: 2,
    color: '#fff',
    textAlign: 'center',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
    fontWeight: '300',
    width: 250,
    fontSize: 18,
    paddingTop: 7,
    paddingBottom: 7,
    elevation: 1,
    textShadowColor: '#fff',
  }
});
export default UserProfile;
