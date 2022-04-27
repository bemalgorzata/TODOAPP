import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { DateComponentModule } from '../../../projects/today-date/src/lib/adapters/primary/ui/date.component-module';
import { ImagesComponentModule } from '../../../projects/images/src/lib/adapters/primary/ui/images.component-module';
import { FirebaseImagesServiceModule } from '../../../projects/images/src/lib/adapters/secondary/infrastructure/firebase-images.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  DateComponentModule,
  ImagesComponentModule,
  FirebaseImagesServiceModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
