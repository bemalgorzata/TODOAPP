import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject, TemplateRef } from '@angular/core';
import { BehaviorSubject, ConnectableObservable, map, Observable } from 'rxjs';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { TaskDTO } from '../../../application/ports/secondary/task.dto';
import { GETS_ALL_TASK_DTO, GetsAllTaskDtoPort } from '../../../application/ports/secondary/gets-all-task.dto-port';
import { SETS_TASK_DTO, SetsTaskDtoPort } from '../../../application/ports/secondary/sets-task.dto-port';
import { REMOVES_TASK_DTO, RemovesTaskDtoPort } from '../../../application/ports/secondary/removes-task.dto-port';

@Component({ selector: 'lib-task-list', templateUrl: './task-list.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class TaskListComponent {
    modalRef: any;
    currentTaskId = '';
    tasks$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll()
        .pipe(map((tasks: TaskDTO[]) =>
            tasks.sort((a, b) => a.created - b.created)))

    alert$ = new BehaviorSubject(false);
    alerts: any[] = [{
    }];
    onClosed(dismissedAlert: AlertComponent): void {
        this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
    }

    constructor(
        private modalService: BsModalService,
        @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
        @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort,
        @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort) {
    }

    onTasksChecked(task: Partial<TaskDTO>): void {
        this._setsTaskDto.set({
            done: !task.done,
            task: task.task,
            id: task.id,
            created: task.created,
        });
        if (!task.done) {
            this.alerts.push({
                type: 'success',
                msg: `Well done, you completed your task!`,
                timeout: 5000
            })
            this.alert$.next(false);
        }
        else {
            this.alert$.next(true);
        }
    }

    onTaskRemoveed(): void {
        this._removesTaskDto.remove(this.currentTaskId);
    }
    openModal(template: TemplateRef<any>, taskId: string) {
        this.currentTaskId = taskId;
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    }

    confirm(): void {
        this.modalRef?.hide();
    }

    decline(): void {
        this.modalRef?.hide();
    }
}
