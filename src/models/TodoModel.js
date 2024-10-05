
export class TodoModel {

    constructor() {
        this.items = [];
    }

    getTasks() {
        return this.items;
    }

    addTask(item) {
        if (item)
            this.items.push(item);
    }

    removeTask(){
        this.items.pop();
    }

}