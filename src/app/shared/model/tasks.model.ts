export class Tasks {
    private isCompleted:boolean = false;
    private title:string;
    private isImportant:boolean = false;

    constructor(title:string) {
        this.title = title;
    }

    getIsCompleted() {
        return this.isCompleted;
    }

    getTitle() {
        return this.title;
    }

    getIsImportant() {
        return this.isImportant;
    }

    setIsCompleted(isCompleted:boolean) {
        this.isCompleted = isCompleted;
    }

    setIsImportant(isImportant:boolean) {
        this.isImportant = isImportant;
    }
}