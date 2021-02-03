import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchillesComponent } from './achilles.component';

const routes: Routes = [{ path: '', component: AchillesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AchillesRoutingModule { }
