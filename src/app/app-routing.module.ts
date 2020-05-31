import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentListComponent } from './agent-list/agent-list.component';
import { ItemMaterialsComponent } from './item-materials/item-materials.component';
import { QuestListComponent } from './quest-list/quest-list.component';
import { ItemMaterialsDetailComponent } from './item-materials-detail/item-materials-detail.component';
import { QuestDetailComponent } from './quest-detail/quest-detail.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { GladiaListComponent } from './gladia-list/gladia-list.component';
import { GladiaDetailComponent } from './gladia-detail/gladia-detail.component';
import { CocoonListComponent } from './cocoon-list/cocoon-list.component';
import { CocoonDetailComponent } from './cocoon-detail/cocoon-detail.component';

const routes: Routes = [
  { path: 'agents', component: AgentListComponent },
  { path: 'agents/:id', component: AgentDetailComponent},
  { path: 'items', component: ItemMaterialsComponent},
  { path: 'items/:id', component: ItemMaterialsDetailComponent},
  { path: 'quest', component: QuestListComponent },
  { path: 'quest/:id', component: QuestDetailComponent },
  { path: 'gladia', component:GladiaListComponent},
  { path: 'gladia/:id', component:GladiaDetailComponent},
  { path: 'cocoon', component: CocoonListComponent},
  { path: 'cocoon/:id', component:CocoonDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

