import { observable } from 'mobx';
import uuidv4 from 'uuid/v4';
export interface ITodo {
    id?: string;
    value: string;
    isComplete?: boolean;
    createdAt?: Date;
}

export class Todo implements ITodo {
    @observable id: string;
    @observable value: string;
    @observable isComplete: boolean = false;
    createdAt: Date;

    constructor(todoItem: ITodo) {
        this.id = todoItem.id || uuidv4();
        this.value = todoItem.value;
        this.isComplete = todoItem.isComplete || false;
        this.createdAt = todoItem.createdAt || new Date();
    }
}

export class TodoStore {
    @observable todos: Array<Todo> = [new Todo({ value: 'Learn react native' })];

    createTodo(todoItem: ITodo): void {
        this.todos.push(new Todo(todoItem))
    }
}
export default new TodoStore();