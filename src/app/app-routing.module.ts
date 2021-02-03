import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'hades', loadChildren: () => import('./features/hades/hades.module').then(m => m.HadesModule) }, { path: 'minotaur', loadChildren: () => import('./features/minotaur/minotaur.module').then(m => m.MinotaurModule) }, { path: 'achilles', loadChildren: () => import('./features/achilles/achilles.module').then(m => m.AchillesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
