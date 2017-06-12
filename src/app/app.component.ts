import { Component } from '@angular/core';
import {Task} from './new-task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // task = {
  //   title: '',
  //   completed: false
  // }
  tasks: Array<any> = [];


  constructor() { }

  someFunction(task){
    console.log(task);
    console.log(this.tasks);
    this.tasks.push(task)
  }

}
