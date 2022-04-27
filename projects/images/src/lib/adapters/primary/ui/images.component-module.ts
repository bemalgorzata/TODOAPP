import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images.component';

@NgModule({ imports: [CommonModule],
  	declarations: [ImagesComponent],
  	providers: [],
  	exports: [ImagesComponent] })
export class ImagesComponentModule {
}
