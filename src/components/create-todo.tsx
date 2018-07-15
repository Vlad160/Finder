import React, { Component, ReactNode } from 'react';
import { Item, Input, Form, Button, Text, View, Textarea, Toast, Root } from 'native-base';
import { StyleSheet } from 'react-native';
import { observable } from 'mobx';
import todoStore, { ITodo } from '../stores/todoStore';
import { observer } from 'mobx-react';

@observer
export default class CreateTodo extends Component<any> {

    @observable todo: ITodo = {
        summary: '',
        description: ''
    }

    render(): ReactNode {
        return (
            <View style={style.formView}>
                <Form >
                    <Item>
                        <Input placeholder="Summary" value={this.todo.summary} onChangeText={(text: string) => this.todo.summary = text} />
                    </Item>
                    <Item>
                        <Textarea style={{ width: '100%', paddingLeft: 5 }} rowSpan={5} multiline={true} placeholder="Description" value={this.todo.description} onChangeText={(text: string) => this.todo.description = text} />
                    </Item>
                </Form>
                <View style={style.submitButton} >
                    <Button onPress={() => this.onSubmit()}>
                        <Text>
                            Submit!
                        </Text>
                    </Button>
                </View>
            </View>
        )
    }

    onSubmit(): void {
        todoStore.createTodo(this.todo);
        Toast.show({
            text: 'Success',
            position: 'bottom',
            buttonText: 'Okay'
        })
        this.props.history.goBack()
    }
}

const style = StyleSheet.create({
    formView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    submitButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
})