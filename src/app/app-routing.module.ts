import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemMaterialsDetailComponent } from './item-materials-detail/item-materials-detail.component';
import { QuestDetailComponent } from './quest-detail/quest-detail.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { GladiaDetailComponent } from './gladia-detail/gladia-detail.component';
import { CocoonDetailComponent } from './cocoon-detail/cocoon-detail.component';
import { IndexComponent } from './index/index.component';
import { DevEquipRecipeComponent } from './dev-equip-recipe/dev-equip-recipe.component';
import { DevComponent } from './dev/dev.component';
import { DevEquipComponent } from './dev-equip/dev-equip.component';
import { EquipDetailComponent } from './equip-detail/equip-detail.component';
import { DevCodetableComponent } from './dev-codetable/dev-codetable.component';
import { EtcComponent } from './etc/etc.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent},
  { path: 'agents', loadChildren: () => import('./agent-list/agent-list.module').then(m => m.AgentListModule) },
  { path: 'agents/:id', component: AgentDetailComponent},
  { path: 'materials', loadChildren: () => import('./item-materials-list/item-materials-list.module').then(m => m.ItemMaterialsListModule) },
  { path: 'materials/:id', component: ItemMaterialsDetailComponent},
  { path: 'quest', loadChildren: () => import('./quest-list/quest-list.module').then(m => m.QuestListModule) },
  { path: 'quest/:id', component: QuestDetailComponent },
  { path: 'gladia', loadChildren: () => import('./gladia-list/gladia-list.module').then(m => m.GladiaListModule) },
  { path: 'gladia/:id', component:GladiaDetailComponent},
  { path: 'cocoon', loadChildren: () => import('./cocoon-list/cocoon-list.module').then(m => m.CocoonListModule) },
  { path: 'cocoon/:id', component:CocoonDetailComponent},
  { path: 'equip', loadChildren: () => import('./equip-list/equip-list.module').then(m => m.EquipListModule) },
  { path: 'equip/:id', component:EquipDetailComponent},
  { path: 'dev', component:DevComponent},
  { path: 'dev/codetable', component: DevCodetableComponent},
  { path: 'dev/equip_recipe', loadChildren: () => import('./dev-equip-recipe/dev-equip-recipe.module').then(m => m.DevEquipRecipeModule) },
  { path: 'dev/equip', loadChildren: () => import('./dev-equip/dev-equip.module').then(m => m.DevEquipModule) },
  { path: 'etc', loadChildren: () => import('./etc/etc.module').then(m => m.EtcModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

