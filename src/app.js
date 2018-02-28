import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCiPZRCw6dSnmhIGYtHE3ch_JkAtZytzuo',
      authDomain: 'authentication-702d9.firebaseapp.com',
      databaseURL: 'https://authentication-702d9.firebaseio.com',
      projectId: 'authentication-702d9',
      storageBucket: 'authentication-702d9.appspot.com',
      messagingSenderId: '1018525697258'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;
