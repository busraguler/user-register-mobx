import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import store from './src/store';
import Router from './src/Router';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider {...store}>
        <Router />
        </Provider>
    );
  }
}
