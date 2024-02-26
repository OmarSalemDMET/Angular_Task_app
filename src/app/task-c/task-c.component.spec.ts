import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCComponent } from './task-c.component';

describe('TaskCComponent', () => {
  let component: TaskCComponent;
  let fixture: ComponentFixture<TaskCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
