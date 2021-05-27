import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TodoCategoryComponent } from './home/todo-category/todo-category.component';
import { TodoTasksComponent } from './home/todo-tasks/todo-tasks.component';
import { TodoTaskDetailsComponent } from './home/todo-task-details/todo-task-details.component';
import { TodoHeaderComponent } from './home/todo-header/todo-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TodoCategoryComponent,
    TodoTasksComponent,
    TodoTaskDetailsComponent,
    TodoHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
