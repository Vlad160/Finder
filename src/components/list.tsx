import { Component } from 'react';
import React from 'react';
import { Text, View } from 'react-native'
import { TodoStore } from '../stores/todoStore';

interface IProps {
    store: TodoStore;
}

export default class List extends Component<IProps, any> {
    render() {
        const { store } = this.props;
        return (
            <View>
                <Text>Second component</Text>
                {(store.todos || []).map(item => <Text key={item.id}>{item.value}</Text>)}
            </View>
        )
    }
}