import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GmIconsModule, GmIconsRegistry} from 'ng-greek-mythology-icons';
import {gmIconsAchilles} from 'greek-mythology-icons';

import { AchillesRoutingModule } from './achilles-routing.module';
import { AchillesComponent } from './achilles.component';


@NgModule({
  declarations: [AchillesComponent],
  imports: [
    CommonModule,
    AchillesRoutingModule,
    GmIconsModule
  ]
})
export class AchillesModule {
  constructor(private gmIconRegistry: GmIconsRegistry) {
    this.gmIconRegistry.registerIcons([gmIconsAchilles]);
  }
}
