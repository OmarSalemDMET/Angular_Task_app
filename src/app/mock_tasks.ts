import { TaskForm } from "./TaskForm";

export let mockTasks : TaskForm[] = [
    {content : "Do Homework !", id : 1, visible : false},
    {content : "Buy Groceries", id : 2, visible : false},
    {content : "Remeber to Code in GOlang", id : 3, visible : false},
    {content : "Try this new Game", id : 4, visible : false},
]

export function updateMockTasks(newTask : TaskForm []) : void
{
    mockTasks = newTask;
}

