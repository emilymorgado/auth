import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCiPZRCw6dSnmhIGYtHE3ch_JkAtZytzuo',
      authDomain: 'authentication-702d9.firebaseapp.com',
      databaseURL: 'https://authentication-702d9.firebaseio.com',
      projectId: 'authentication-702d9',
      storageBucket: 'authentication-702d9.appspot.com',
      messagingSenderId: '1018525697258'
    });

    //event handler that accepts a function and handles
    //both signing in and signing out
    //if state changes, the user (object representing the user)
    //object || null (signed out)
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

//helper function
  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
      //TODO: refactor spinner with a view tag
      //To center it on the screen
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
