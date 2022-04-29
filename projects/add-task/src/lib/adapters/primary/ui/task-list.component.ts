import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { SETS_TASK_DTO, SetsTaskDtoPort } from '../../../application/ports/secondary/sets-task.dto-port';

@Component({ selector: 'lib-task-list', templateUrl: './task-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class TaskListComponent {
    tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();

    constructor(
        @Inject(GETS_ALL_TASK_DTO)
        private _getsAllTaskDto: GetsAllTaskDtoPort, @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort) {
    }

    onTasksChecked(task: TaskDTO): void {
        if (task.done == true) {
            this._setsTaskDto.set({
                task: task.task,
                done: true,
            })
        }
        if (task.done == false) {
            this._setsTaskDto.set({
                task: task.task,
                done: false,
            })
        }
    }
}
