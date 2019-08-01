import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './components/Main';
import RegisterUser from './components/user/RegisterUser';
import UserProfile from './components/user/UserProfile';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" >
        <Scene key="main" hideNavBar={true} initial component={Main} />
        <Scene key="registerUser" hideNavBar={true} component={RegisterUser} />
        <Scene key="userProfile" hideNavBar={true} component={UserProfile} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
