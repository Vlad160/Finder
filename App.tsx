import React from "react";
import 'es6-symbol/implement';
import { View, Text, StyleSheet } from "react-native";
import Reactive from "./src/components/reactive";
import store from "./src/stores/reactiveStore"
export interface Props { }
export interface State { }

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Reactive store={store} />
      </View>
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