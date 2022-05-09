import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
	imports: [CommonModule, AlertModule.forRoot(), ModalModule.forRoot()],
	declarations: [TaskListComponent],
	providers: [AlertConfig],
	exports: [TaskListComponent]
})
export class TaskListComponentModule {
}
