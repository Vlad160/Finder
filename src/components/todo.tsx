import React, { Component, ReactNode, ReactElement } from 'react';
import { ITodo } from '../stores/todoStore';
import { Card, CardItem, Body } from 'native-base';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import moment from 'moment';
import { Text, StyleSheet, FlatList } from 'react-native';

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
                    <Text style={{ fontSize: 16 }}>
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
            <>
                <CardItem>
                    <Body>
                        <Text>
                            {item.description}
                        </Text>
                        {item.subtasks && item.subtasks.length && (
                            <FlatList data={item.subtasks}
                                keyExtractor={(todo) => todo.id}
                                renderItem={({ item }) => <Text>{item.summary}</Text>}
                            >
                            </FlatList>
                        )}
                    </Body>
                </CardItem>
                <CardItem footer style={styles.footer}>
                    <Text>{moment(item.createdAt).format('MMM Do YY')}</Text>
                </CardItem>
            </>
        )
    }

    handleClick = () => {
        this.isOpen = !this.isOpen;
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 18
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})