import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocoonListComponent } from './cocoon-list.component';

const routes: Routes = [{ path: '', component: CocoonListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocoonListRoutingModule { }
