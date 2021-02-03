import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchillesRoutingModule } from './achilles-routing.module';
import { AchillesComponent } from './achilles.component';


@NgModule({
  declarations: [AchillesComponent],
  imports: [
    CommonModule,
    AchillesRoutingModule
  ]
})
export class AchillesModule { }
