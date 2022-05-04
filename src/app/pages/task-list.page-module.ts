import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskListPage } from './task-list.page';
import { TaskListComponentModule } from '../../../projects/add-task/src/lib/adapters/primary/ui/task-list.component-module';
import { FirebaseTaskServiceModule } from '@add-task';
import { ImagesComponentModule } from '../../../projects/images/src/lib/adapters/primary/ui/images.component-module';
import { FirebaseImagesServiceModule } from '../../../projects/images/src/lib/adapters/secondary/infrastructure/firebase-images.service-module';
import { AddTaskComponentModule } from '../../../projects/add-task/src/lib/adapters/primary/ui/add-task.component-module';
import { DateComponentModule } from '../../../projects/today-date/src/lib/adapters/primary/ui/date.component-module';

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
    ImagesComponentModule,
    FirebaseImagesServiceModule,
    AddTaskComponentModule,
    DateComponentModule,

  ],
  declarations: [TaskListPage],
  providers: [],
  exports: []
})
export class TaskListPageModule {
}
