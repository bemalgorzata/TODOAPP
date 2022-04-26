import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTaskPage } from './add-task.page';
import { AddTaskComponentModule } from '../../../projects/add-task/src/lib/adapters/primary/ui/add-task.component-module';
import { FirebaseTaskServiceModule } from '../../../projects/add-task/src/lib/adapters/secondary/infrastructure/firebase-task.service-module';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddTaskPage,
      }
    ]),
    AddTaskComponentModule,
    FirebaseTaskServiceModule
  ],
  declarations: [AddTaskPage],
  providers: [],
  exports: []
})
export class AddTaskPageModule {
}