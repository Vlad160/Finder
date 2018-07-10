import { observable } from "mobx"
export class ReactiveStore {
    @observable value: string;
}

export default new ReactiveStore()