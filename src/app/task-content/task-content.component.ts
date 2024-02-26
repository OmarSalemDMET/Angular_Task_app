import { Component, Input, NgModule, OnInit } from '@angular/core';
import { mockTasks } from '../mock_tasks';
import { updateMockTasks } from '../mock_tasks';
import { TaskForm } from '../TaskForm';
import { TaskService } from '../task.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-content',
  standalone: true,
  imports: [NgFor,CommonModule,FormsModule],
  templateUrl: './task-content.component.html',
  styleUrl: './task-content.component.css'
})
export class TaskContentComponent implements OnInit{

 selectedTask? : TaskForm;

 @Input() newTask? : string
 tempContent : string = ""
 task_l : TaskForm[] = []
 temp_task : TaskForm[] = []

 constructor(private taskService : TaskService){}

 ngOnInit(): void {
     this.getTask();
 }
 onSelect(task : TaskForm) : void {
   this.selectedTask = task
 }
 getTask() : void {
   this.taskService.getTasks()
   .subscribe(task_l => this.task_l = task_l) 
 }

 checkChecked() : void {
  for (const task of this.task_l) {
    console.log(`Task ${task.id}: isChecked -> ${task.visible}`);
  }
 }

 deleteElement(id_task : number) : void
 {
  console.log(id_task)
  this.task_l = mockTasks.filter(item => item.id !== id_task)
  console.log(this.task_l)
  updateMockTasks(this.task_l)
 }

}
