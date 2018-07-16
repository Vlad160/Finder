import { observable, IObservableArray } from 'mobx';
import uuidv4 from 'uuid/v4';
export interface ITodo {
    id?: string;
    summary: string;
    description?: string;
    isComplete?: boolean;
    subtasks?: Array<ITodo>;
    createdAt?: Date;
}

export class Todo implements ITodo {
    id?: string;
    @observable summary: string;
    @observable isComplete?: boolean = false;
    @observable description?: string;
    createdAt?: Date;
    @observable subtasks?: ITodo[];

    constructor(todoItem: ITodo) {
        this.id = todoItem.id || uuidv4();
        this.summary = todoItem.summary;
        this.description = todoItem.description || '';
        this.isComplete = todoItem.isComplete || false;
        this.createdAt = todoItem.createdAt || new Date();
        this.subtasks = todoItem.subtasks || [];
    }
}

const getMock = () => new Todo({
    summary: 'Learn React native',
    description: 'Just do it!',
    isComplete: Math.random() > 0.6,
    subtasks: Array(Math.ceil(Math.random() * 4)).fill('').map(() => new Todo({
        summary: 'Subtask'
    }))
})

export class TodoStore {
    @observable todos: IObservableArray<Todo> = Array(1000).fill(100).map(getMock) as IObservableArray<Todo>;

    createTodo(todoItem: ITodo): void {
        this.todos.push(new Todo(todoItem))
    }

    updateTodo(prevValue: ITodo, currentValue: ITodo): void {
        const index: number = this.todos.findIndex(x => x === prevValue);
        this.todos[index] = currentValue;
    }
}
export default new TodoStore();