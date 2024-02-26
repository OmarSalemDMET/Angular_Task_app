import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { TaskService } from '../task.service';
import { TaskForm } from '../TaskForm';
import { TaskContentComponent } from '../task-content/task-content.component';
import { mockTasks } from '../mock_tasks';
import { updateMockTasks } from '../mock_tasks';

@Component({
  selector: 'app-task-c',
  standalone: true,
  imports: [FormsModule, NgFor,TaskContentComponent, NgIf],
  templateUrl: './task-c.component.html',
  styleUrl: './task-c.component.css'
})
export class TaskCComponent  {
   nTask?: string;
   
   wantNew : boolean = false;

   onSelect() : void {
    const inp = document.getElementById("newTask") as HTMLInputElement;

    this.nTask = inp.value as string;

    if (mockTasks.length === 0){
      let arr : TaskForm[]= []
      updateMockTasks(mockTasks)
      const temTask : TaskForm = {content : this.nTask, id : 1, visible : false }
      mockTasks.push(temTask);
    }
    else {
      const temTask : TaskForm = {content : this.nTask, id : mockTasks[mockTasks.length-1].id + 1, visible : false }
      mockTasks.push(temTask);
    }


    const h = document.getElementById("myForm") as HTMLFormElement;
    console.log(this.nTask);
    h.reset();
   }

   getWantNew() : boolean {
    return this.wantNew;
   }

   changeWantNew() : void {
    this.wantNew = !this.wantNew;
   }

}
