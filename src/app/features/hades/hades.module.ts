import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HadesRoutingModule } from './hades-routing.module';
import { HadesComponent } from './hades.component';
import {GmIconsModule, GmIconsRegistry} from 'ng-greek-mythology-icons';
import {gmIconsHades} from 'greek-mythology-icons';


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
