import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {GmIconsModule, GmIconsRegistry} from 'ng-greek-mythology-icons';
import {gmIconsMinotaur} from 'greek-mythology-icons';

import { MinotaurRoutingModule } from './minotaur-routing.module';
import { MinotaurComponent } from './minotaur.component';

@NgModule({
  declarations: [MinotaurComponent],
  imports: [
    CommonModule,
    MinotaurRoutingModule,
    GmIconsModule
  ]
})
export class MinotaurModule {

  constructor(private gmIconsRegistry: GmIconsRegistry) {
    this.gmIconsRegistry.registerIcons([gmIconsMinotaur]);
  }
}
