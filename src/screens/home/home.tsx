import React, { Component, ReactNode } from 'react';
import { Redirect } from 'react-router';
import { View, Text } from 'native-base';

export default class Home extends Component {
    render(): ReactNode {
        return (
            <View>
                <Text>Home!</Text>
                <Redirect to="/todos" />
            </View>

        )
    }
}