import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCComponent } from './task-c/task-c.component';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskCComponent, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task Assistant';
}
