import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BossListComponent } from './boss-list.component';

const routes: Routes = [{ path: '', component: BossListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BossListRoutingModule { }
