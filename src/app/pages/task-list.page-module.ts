import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListPage } from './task-list.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TaskListPage,
        }
      ])],
  	declarations: [TaskListPage],
  	providers: [],
  	exports: [] })
export class TaskListPageModule {
}
