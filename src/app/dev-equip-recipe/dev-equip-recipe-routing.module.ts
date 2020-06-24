import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevEquipRecipeComponent } from './dev-equip-recipe.component';

const routes: Routes = [{ path: '', component: DevEquipRecipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevEquipRecipeRoutingModule { }
