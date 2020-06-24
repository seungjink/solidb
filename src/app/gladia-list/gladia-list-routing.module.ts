import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GladiaListComponent } from './gladia-list.component';

const routes: Routes = [{ path: '', component: GladiaListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GladiaListRoutingModule { }
