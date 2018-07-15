import React, { ReactNode } from 'react';
import Expo from 'expo';
import { Container } from 'native-base';
import TodoList from './src/screens/todo-list/todo-list';
import Home from './src/screens/home/home';
import TopHeader from './src/components/top-header';
import { NativeRouter, Route, Redirect } from 'react-router-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class App extends React.Component {

  @observable fontsLoaded = false;

  render() {
    return (
      <NativeRouter>
        {this.fontsLoaded ? this.renderMainScreen() : <Container></Container>}
      </NativeRouter>
    );
  }

  renderMainScreen(): ReactNode {
    return (
      <Container>
        <TopHeader />
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={TodoList} />
      </Container>
    )
  }
  async componentWillMount(): Promise<void> {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.fontsLoaded = true;
  }
}
