import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { FrontComponent } from './front.component';
import { SharedModule } from '../@shared/shared.module';
import { MainComponent } from './forms/main/main.component';
import { Question1Component } from './forms/question1/question1.component';


@NgModule({
  declarations: [
    FrontComponent,
    MainComponent,
    Question1Component
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    SharedModule
  ]
})
export class FrontModule { }
