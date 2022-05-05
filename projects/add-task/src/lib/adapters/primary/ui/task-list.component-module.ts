import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { AlertModule, AlertConfig } from 'ngx-bootstrap/alert';

@NgModule({
	imports: [CommonModule, AlertModule.forRoot()],
	declarations: [TaskListComponent],
	providers: [AlertConfig],
	exports: [TaskListComponent]
})
export class TaskListComponentModule {
}
