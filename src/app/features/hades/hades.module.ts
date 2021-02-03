import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HadesRoutingModule } from './hades-routing.module';
import { HadesComponent } from './hades.component';


@NgModule({
  declarations: [HadesComponent],
  imports: [
    CommonModule,
    HadesRoutingModule
  ]
})
export class HadesModule { }
