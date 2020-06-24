import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestListComponent } from './quest-list.component';

const routes: Routes = [{ path: '', component: QuestListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestListRoutingModule { }
