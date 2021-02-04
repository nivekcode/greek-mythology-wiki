import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AchillesRoutingModule } from './achilles-routing.module';
import { AchillesComponent } from './achilles.component';
import {GmIconsModule} from 'ng-greek-mythology-icons';


@NgModule({
  declarations: [AchillesComponent],
  imports: [
    CommonModule,
    AchillesRoutingModule,
    GmIconsModule
  ]
})
export class AchillesModule { }
