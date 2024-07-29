import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessingRoutingModule } from './processing-routing.module';
import { ProcessingComponent } from './processing.component';


@NgModule({
  declarations: [
    ProcessingComponent
  ],
  imports: [
    CommonModule,
    ProcessingRoutingModule
  ]
})
export class ProcessingModule { }
