import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router /> 
      </Provider>
    );
  }
}

export default App;
