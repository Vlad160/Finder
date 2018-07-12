import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Reactive from "./src/components/reactive";
import store from "./src/stores/reactiveStore";
import todoStore from './src/stores/todoStore';
import List from './src/components/list';
import { NativeRouter, Router, Route, Link } from 'react-router-native';
import { Todo } from './src/stores/todoStore';
export interface Props { }
export interface State { }

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <NativeRouter>
        <View>
          <Text style={styles.welcome}>
            Welcome to React Native!
        </Text>
          <Link to="/list">
            <Text>Go!</Text>
          </Link>
          <Link to="/reactive">
            <Text>Go to reactive!</Text>
          </Link>
          <Link to="/todos">
            <Text>Go to todos!</Text>
          </Link>
          <Route exact path="/list" render={() => <List store={todoStore} />} />
          <Route exact path="/reactive" render={() => <Reactive store={store} />} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});