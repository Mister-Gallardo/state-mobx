import { makeAutoObservable } from "mobx";


class Counter {
    count: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    increment() {
        this.count += 1;
    }

    decrement() {
        this.count -= 1;
    }

    get total() {
        return `Счётчик = ${this.count}; *2 = ${this.count*2}`
    }
}

export default new Counter();