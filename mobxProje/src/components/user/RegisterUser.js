import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../parts/Header';
import { Card, CardSection, Input } from '../../partner';

@inject('UserStore')
@observer

class RegisterUser extends Component {

  registerButton() {
    const { UserStore } = this.props;
    return (
      <TouchableOpacity style={styles.registerButton_View} onPress={() => UserStore.registerAsyncStorage()}>
        <Text style={styles.registerButton_Title}> KAYIT OL </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { UserStore } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Header headerTitle={'kayit'} />
        </View>
        <View style={{ flex: 13 }}>
          <ScrollView>
            <View style={{ justifyContent: 'center', marginLeft: 20, marginTop: 100, marginBottom: 100, marginRight: 20 }}>
              <Card>
                <Text style={styles.containerTitle}> KAYIT YAPIN </Text>
                <CardSection>
                  <Input
                    placeholder="E-posta"
                    style={styles.textInput}
                    value={UserStore.userEmail}
                    onChangeText={userEmail => UserStore.changeUserEmail(userEmail)}
                  />
                </CardSection>
                <CardSection>
                  <Input
                    secureTextEntry={true}
                    placeholder="Parola"
                    style={styles.textInput}
                    value={UserStore.userPassword}
                    onChangeText={userPassword => UserStore.changeuserPassword(userPassword)}
                  />
                </CardSection>
                <CardSection>
                  <Input
                    placeholder="ApiUrl"
                    style={styles.textInput}
                    value={UserStore.apiUrl}
                    onChangeText={apiUrl => UserStore.changeuserapiUrl(apiUrl)}
                  />
                </CardSection>
                <CardSection>
                   {this.registerButton()}
                </CardSection>
                <Text style={{ paddingBottom: 10, backgroundColor: '#fff' }}> </Text>
              </Card>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Raleway sans-serif',
    color: '#8C8E93',
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 15,
    lineHeight: 20,
    flex: 2
  },
  containerTitle: {
    letterSpacing: -1,
    fontFamily: 'Raleway sans-serif',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 20,
    color: '#8C8E93',
    textAlign: 'center',
    fontSize: 18,
  },
  registerButton_View: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerButton_Title: {
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
    paddingTop: 5,
    paddingBottom: 5,
    elevation: 1,
    textShadowColor: '#fff',
  },


});

export default RegisterUser;
