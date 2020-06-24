import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevEquipComponent } from './dev-equip.component';

const routes: Routes = [{ path: '', component: DevEquipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevEquipRoutingModule { }
