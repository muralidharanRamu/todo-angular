import { Component, OnInit } from '@angular/core';
import { TodoLists } from 'src/app/shared/model/todoLists.model';

@Component({
  selector: 'app-todo-category',
  templateUrl: './todo-category.component.html',
  styleUrls: ['./todo-category.component.scss']
})
export class TodoCategoryComponent implements OnInit {

  todoLists: TodoLists[] = [];
  isToggledCategoryList:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.todoLists.push(new TodoLists("fas fa-sun", "My Day"));
    this.todoLists.push(new TodoLists("far fa-star", "Important"));
    this.todoLists.push(new TodoLists("fas fa-calendar-week", "Planned"));
    this.todoLists.push(new TodoLists("far fa-user", "Assigned to you"));
    this.todoLists.push(new TodoLists("fas fa-home", "Tasks"));
  }

  addNewList(event: any) {
    this.todoLists.push(new TodoLists("fas fa-list", event.target.value));
    event.target.value = "";
  }

  toggleCategoryList() {
    this.isToggledCategoryList = !this.isToggledCategoryList;
    console.log(this.isToggledCategoryList)
  }
}
