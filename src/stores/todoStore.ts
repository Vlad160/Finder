import { observable } from 'mobx';
import uuidv4 from 'uuid/v4';
export interface ITodo {
    id?: string;
    summary: string;
    description?: string;
    isComplete?: boolean;
    createdAt?: Date;
}

export class Todo implements ITodo {
    id?: string;
    @observable summary: string;
    @observable isComplete?: boolean = false;
    @observable description?: string;
    createdAt?: Date;

    constructor(todoItem: ITodo) {
        this.id = todoItem.id || uuidv4();
        this.summary = todoItem.summary;
        this.description = todoItem.description || '';
        this.isComplete = todoItem.isComplete || false;
        this.createdAt = todoItem.createdAt || new Date();
    }
}

const getMock = () => new Todo({
    summary: 'Learn React native',
    description: 'Just do it!',
    isComplete: Math.random() > 0.6
})

export class TodoStore {
    @observable todos: Array<Todo> = Array(10).fill(5).map(getMock);

    createTodo(todoItem: ITodo): void {
        this.todos.push(new Todo(todoItem))
    }

    updateTodo(prevValue: ITodo, currentValue: ITodo): void {
        const index: number = this.todos.findIndex(x => x === prevValue);
        this.todos[index] = currentValue;
    }
}
export default new TodoStore();