import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  @Input() myTasks;
  task = {
    title: '',
    completed: false
  }

  @Output() myEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTask(formData){
    this.myEvent.emit(formData.value);
    // this.tasks.push(formData.value);
    formData.reset();
    // console.log(this.tasks);
  }
}
