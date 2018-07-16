import { Component, ReactNode, PureComponent } from 'react';
import React from 'react';
import { default as Swipeable } from 'react-native-swipeable-row';
import { View, StyleSheet, ScrollView, InteractionManager } from 'react-native';
import Todo from './todo';
import { ITodo } from '../stores/todoStore';
import { Icon } from 'native-base';

export interface ISwipeableTodoProps {
    item: ITodo
}
export default class SwipeableTodo extends PureComponent<ISwipeableTodoProps> {

    todo: ITodo = this.props.item;

    render(): ReactNode {
        const { item: todo } = this.props;
        return (
            <Swipeable
                leftActionActivationDistance={50}
                onLeftActionComplete={() => this.toggleTodo()}
                leftContent={
                    <View style={styles.leftSwipe}>{this.renderToggle()}
                    </View>}>
                <Todo item={todo}></Todo>
            </Swipeable >
        )
    }

    renderToggle(): ReactNode {
        return this.todo.isComplete ? <Icon name="undo" type="MaterialIcons" color="#00FF00" /> : <Icon name="done" type="MaterialIcons" color="#00FF00" />
    }

    toggleTodo(): void {
        const { item } = this.props;
        InteractionManager.runAfterInteractions(() => {
            item.isComplete = !item.isComplete
        })
    }

}

const styles = StyleSheet.create({
    leftSwipe: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20
    }
})