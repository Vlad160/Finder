import React, { Component, ReactNode, ReactElement } from 'react';
import todoStore, { ITodo } from '../stores/todoStore';
import { Card, CardItem, Body, Text, SwipeRow, Button, Icon } from 'native-base';
import { observable } from 'mobx';

export interface ITodoProps {
    item: ITodo;
}
export default class Todo extends Component<ITodoProps> {

    @observable isOpen = false;

    render(): ReactNode {
        return (
            // <SwipeRow leftOpenValue={75} left={
            //     <Button success onPress={() => this.toggleTodo()}>
            //         <Icon active name="add" />
            //     </Button>
            // } style={{ padding: 0, margin: 0 }} body={this.renderTodo()}>
            // </SwipeRow>
            this.renderTodo()
        )
    }

    private renderTodo(): ReactElement<any> {
        const { item } = this.props;
        return (
            <Card>
                <CardItem header button onPress={this.toggleTodo}>
                    <Text>
                        {item.summary}
                    </Text>
                </CardItem>
                {this.isOpen && this.renderTodoBody()}
            </Card>
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

    toggleTodo = () => {
        const { item: todo } = this.props;
        // todo.isComplete = !todo.isComplete;
        todoStore.updateTodo(todo, { ...todo, isComplete: !todo.isComplete });
    }
}