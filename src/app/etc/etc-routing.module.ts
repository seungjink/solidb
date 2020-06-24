import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtcComponent } from './etc.component';

const routes: Routes = [{ path: '', component: EtcComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtcRoutingModule { }
