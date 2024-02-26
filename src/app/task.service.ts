import { Injectable } from '@angular/core';
import { TaskForm } from './TaskForm';
import { mockTasks } from './mock_tasks';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  constructor() { }

  getTasks() : Observable<TaskForm[]>{
    const task = of(mockTasks)
    return task;
  }

  
}
