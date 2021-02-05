import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GmIconsModule, GmIconsRegistry} from 'ng-greek-mythology-icons';
import {gmIconsHades} from 'greek-mythology-icons';

import { HadesRoutingModule } from './hades-routing.module';
import { HadesComponent } from './hades.component';


@NgModule({
  declarations: [HadesComponent],
  imports: [
    CommonModule,
    HadesRoutingModule,
    GmIconsModule
  ]
})
export class HadesModule {
  constructor(private gmIconsRegistry: GmIconsRegistry) {
    this.gmIconsRegistry.registerIcons([gmIconsHades]);
  }
}
