import { Tasks } from "./tasks.model";

export class TodoLists {
    private icon:string;
    private title:string;
    private tasks:Tasks[] = [];

    constructor(icon:string, title:string) {
        this.icon = icon;
        this.title = title;
    }

    getIcon() {
        return this.icon;
    }

    getTitle() {
        return this.title;
    }

    getTasks() {
        return this.tasks;
    }
}