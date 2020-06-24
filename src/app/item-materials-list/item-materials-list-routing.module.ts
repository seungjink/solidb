import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemMaterialsListComponent } from './item-materials-list.component';

const routes: Routes = [{ path: '', component: ItemMaterialsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemMaterialsListRoutingModule { }
