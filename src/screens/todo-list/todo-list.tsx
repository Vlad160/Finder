import React, { Component, ReactNode } from 'react';
import todoStore, { ITodo } from '../../stores/todoStore';
import { Tabs, Tab, Container, Fab, Icon } from 'native-base';
import { partition } from 'lodash';
import { observer } from 'mobx-react';
import SwipeableTodo from '../../components/swipeable-todo';
import { FlatList } from 'react-native';

@observer
export default class TodoList extends Component<any> {

    constructor(props: any) {
        super(props);
    }
    render(): ReactNode {
        const todos = todoStore.todos;
        const [completed, incompleted] = partition(todos, (todo: ITodo) => todo.isComplete);
        return (
            <Container>
                <Tabs locked>
                    <Tab heading="Todo">
                        {this.renderTodoList(incompleted)}
                    </Tab>
                    <Tab heading="Done">
                        {this.renderTodoList(completed)}
                    </Tab>
                </Tabs>
                <Fab position="bottomRight" onPress={() => this.props.history.push('/create')}>
                    <Icon name="edit" type="Entypo" />
                </Fab>
            </Container>
        )
    }

    private renderTodoList(todos: Array<ITodo>): ReactNode {
        return (
            <FlatList
                keyExtractor={(item) => item.id}
                data={todos}
                numColumns={1}
                initialNumToRender={5}
                renderItem={({ item }) => <SwipeableTodo item={item} />} >
            </FlatList>
        )
    }
}