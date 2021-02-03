import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinotaurComponent } from './minotaur.component';

const routes: Routes = [{ path: '', component: MinotaurComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinotaurRoutingModule { }
