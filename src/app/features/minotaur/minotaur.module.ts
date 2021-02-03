import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinotaurRoutingModule } from './minotaur-routing.module';
import { MinotaurComponent } from './minotaur.component';


@NgModule({
  declarations: [MinotaurComponent],
  imports: [
    CommonModule,
    MinotaurRoutingModule
  ]
})
export class MinotaurModule { }
