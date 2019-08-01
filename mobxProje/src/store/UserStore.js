import { observable, action } from 'mobx';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';


class UserStore {
  @observable userTokenId;

  @observable userEmail = null;
  @observable userPassword = null;
  @observable apiUrl = null;

  @observable newUserPassword;
  @observable confirmUserPassword;

  @observable newuserEmail;
  @observable newApiUrl

  @observable newSetValue;
  @observable confirmSetValue;

  @observable newPlaceholder;
  @observable confirmPlaceholder;

  @observable userPasswordCard = 0;
  @observable userEmailCard = 0;
  @observable apiUrlCard = 0;

 @action resetVariables() {
   this.userEmail = null;
   this.userPassword = null;
   this.apiUrl = null;
 }

 @action resetCard() {
   this.userPasswordCard = 0;
   this.userEmailCard = 0;
   this.apiUrlCard = 0;
 }

  @action userToken = async () => {
    try {
       const userTokenId = await AsyncStorage.getItem('userTokenId');
       if (userTokenId !== null) {
         Actions.userProfile();
       } else {
         Actions.reset('registerUser');
       }
    } catch (error) {
      // Error retrieving data
    }
  };

  @action userInfo = async () => {
    try {
       AsyncStorage.multiGet(['userEmail', 'userPassword', 'apiUrl', 'userTokenId']).then((data) => {
        const userEmail = data[0][1];
        const userPassword = data[1][1];
        const apiUrl = data[2][1];
        const userTokenId = data[3][1];
        if (userEmail !== null && userPassword !== null && apiUrl !== null && userTokenId !== null) {
          this.userEmail = userEmail;
          this.userPassword = userPassword;
          this.apiUrl = apiUrl;
          this.userTokenId = userTokenId;
        } else {
            Actions.registerUser();
        }
      })
    } catch (error) {
      // Error retrieving data
    }
  };

////-----------REGISTERUSER-----------//////
  @action changeUserEmail(props) {
    this.userEmail = props;
  }
  @action changeuserPassword(props) {
    this.userPassword = props;
  }
  @action changeuserapiUrl(props) {
    this.apiUrl = props;
  }

  @action registerAsyncStorage = async () => {
     if (this.userEmail && this.userPassword && this.apiUrl) {
       if (this.userPassword.length >= 6) {
         this.userTokenId = '666666';
         try {
           await AsyncStorage.multiSet([
                  ['userEmail', this.userEmail.trim()],
                  ['userPassword', this.userPassword !== '' ? this.userPassword.trim() : ''],
                  ['apiUrl', this.apiUrl.trim()],
                  ['userTokenId', this.userTokenId.trim()]
           ]);
           alert('Başarıyla tamamlandı')
           Actions.main();
         } catch (error) {
            // Error saving data
         }
       } else {
          alert('Parola en az 6 haneli olmalıdır!');
       }
     } else {
        alert('Lütfen tüm alanların doldurun!!');
     }
  };

////-----------REGISTERUSER-----------//////

////-----------USERPROFİLE-----------//////

  @action removeAsyncStorage = async () => {
    try {
      const keys = ['userEmail', 'userPassword', 'apiUrl', 'userTokenId'];
      await AsyncStorage.multiRemove(keys, (err) => {
        alert('Bilgiler Silindi')
      })
      this.resetVariables();
      Actions.reset('main');
    } catch (error) {
       // Error saving data
    }
  };

  @action showuserEmailCard() {
    if (this.userEmailCard === 0) {
      this.userEmailCard = 1;
      this.userPasswordCard = 0;
      this.apiUrlCard = 0;

      this.newPlaceholder = 'Yeni E-posta';
    }
  }

  @action showUserPasswordCard() {
    if (this.userPasswordCard === 0) {
      this.userPasswordCard = 1;
      this.apiUrlCard = 0;
      this.userEmailCard = 0;

      this.newPlaceholder = 'Yeni parola';
      this.confirmPlaceholder = 'Tekrar parola';
    }
  }

  @action showApiUrlCard() {
    if (this.apiUrlCard === 0) {
      this.apiUrlCard = 1;
      this.userPasswordCard = 0;
      this.userEmailCard = 0;

      this.newPlaceholder = 'Yeni apiurl';
    }
  }


  @action changeNewSetValue(newSetValue) {
    if (this.userPasswordCard === 1) {
          this.newUserPassword = newSetValue;
    } else if (this.userEmailCard === 1) {
        this.newuserEmail = newSetValue;
    } else if (this.apiUrlCard === 1) {
        this.newApiUrl = newSetValue;
    }
  }

  @action changeConfirmSetValue(confirmSetValue) {
    if (this.userPasswordCard === 1) {
        this.confirmUserPassword = confirmSetValue;
    }
  }

  @action updateSetValueAsyncStorage() {
    if (this.userPasswordCard === 1) {
        this.updatePasswordAsyncStorage();
    } else if (this.userEmailCard === 1) {
        this.updateuserEmailAsyncStorage();
    } else if (this.apiUrlCard === 1) {
        this.updateApiUrlAsyncStorage();
    }
  }

  @action updatePasswordAsyncStorage = async () => {
      if (this.newUserPassword && this.confirmUserPassword) {
        if (this.newUserPassword.length >= 6 && this.confirmUserPassword.length >= 6) {
            if (this.newUserPassword === this.confirmUserPassword) {
              try {
                await AsyncStorage.setItem('userPassword', this.newUserPassword)
                alert('Başarıyla tamamlandı')
                Actions.userProfile();
              } catch (error) {
                 // Error saving data
              }
            } else {
              alert('Parolalar uyuşmuyor')
            }
        } else {
          alert('Paralo en az 6 haneden oluşmalıdır!');
        }
      } else {
        alert('Lütfen tüm alanları doldurun');
      }
    };

  @action updateuserEmailAsyncStorage = async () => {
    if (this.newuserEmail) {
        try {
          await AsyncStorage.setItem('userEmail', this.newuserEmail)
          alert('Başarıyla tamamlandı')
          Actions.userProfile();
        } catch (error) {
           // Error saving data
        }
    } else {
        alert('Lütfen bir e-posta girin!');
    }
  };

  @action updateApiUrlAsyncStorage = async () => {
      if (this.newApiUrl) {
            try {
              await AsyncStorage.setItem('apiUrl', this.newApiUrl)
              alert('Başarıyla tamamlandı')
              Actions.userProfile();
            } catch (error) {
               // Error saving data
            }
      } else {
        alert('Lütfen bir ApiUrl girin!!');
      }
    };

  ////-----------USERPROFİLE-----------//////

}
export default new UserStore();
