import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListPage } from './task-list.page';
import { TaskListComponentModule } from '../../../projects/add-task/src/lib/adapters/primary/ui/task-list.component-module';
import { FirebaseTaskServiceModule } from '@add-task';
// import { FirebaseTaskServiceModule } from '../../../projects/add-task/src/lib/adapters/secondary/infrastructure/firebase-task.service-module';

@NgModule({
  imports: [CommonModule,
    FirebaseTaskServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: TaskListPage,
      }
    ]),
    TaskListComponentModule,
  ],
  declarations: [TaskListPage],
  providers: [],
  exports: []
})
export class TaskListPageModule {
}
