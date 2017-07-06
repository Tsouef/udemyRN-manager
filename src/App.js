import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBGpJ2aLvOP4BPd1oBf8Numz8-gD2Zr2Zo',
      authDomain: 'manager-4c936.firebaseapp.com',
      databaseURL: 'https://manager-4c936.firebaseio.com',
      projectId: 'manager-4c936',
      storageBucket: 'manager-4c936.appspot.com',
      messagingSenderId: '521318793515'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
