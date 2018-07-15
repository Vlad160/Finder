import React, { Component, ReactNode, ReactElement } from 'react';
import { ITodo } from '../stores/todoStore';
import { Card, CardItem, Body } from 'native-base';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Text } from 'react-native';

export interface ITodoProps {
    item: ITodo;
}

@observer
export default class Todo extends Component<ITodoProps> {

    @observable isOpen = false;

    render(): ReactNode {
        return (
            this.renderTodo()
        )
    }

    private renderTodo(): ReactElement<any> {
        const { item } = this.props;
        return (
            <Card>
                <CardItem header button onPress={this.handleClick}>
                    <Text>
                        {item.summary}
                    </Text>
                </CardItem>
                {this.isOpen && this.renderTodoBody()}
            </Card >
        )
    }
    private renderTodoBody(): ReactNode {
        const { item } = this.props;
        return (
            <CardItem>
                <Body>
                    <Text>
                        {item.description}
                    </Text>
                </Body>
            </CardItem>
        )
    }

    handleClick = () => {
        console.log('Clicked!');
        this.isOpen = !this.isOpen;
    }
}