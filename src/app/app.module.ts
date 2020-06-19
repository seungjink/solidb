import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UnderbarEliminator } from './shared/regex.pipe';


// For Scrolling Issue////////////////////////
import {Router, Scroll} from '@angular/router';
import {ViewportScroller} from '@angular/common'
import { filter } from 'rxjs/operators';
//////////////////////////////////////////////


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { QuestListComponent } from './quest-list/quest-list.component'; 
import { ItemMaterialsComponent } from './item-materials/item-materials.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from "@angular/material/table";
import { MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatSortModule } from '@angular/material/sort'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatDividerModule } from '@angular/material/divider'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { SoliProviderService } from './shared/soli-provider.service';
import { ItemMaterialsDetailComponent } from './item-materials-detail/item-materials-detail.component';
import { QuestDetailComponent } from './quest-detail/quest-detail.component';
import { FormsModule } from '@angular/forms';
import { AgentMotionComponent } from './agent-motion/agent-motion.component';
import { GladiaListComponent } from './gladia-list/gladia-list.component';
import { GladiaDetailComponent } from './gladia-detail/gladia-detail.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CocoonListComponent } from './cocoon-list/cocoon-list.component';
import { CocoonDetailComponent } from './cocoon-detail/cocoon-detail.component';
import { IndexComponent } from './index/index.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {ClipboardModule} from '@angular/cdk/clipboard';
import { DevEquipRecipieComponent } from './dev-equip-recipie/dev-equip-recipie.component';
import { DevComponent } from './dev/dev.component';
import { DevEquipComponent } from './dev-equip/dev-equip.component';
import { EquipListComponent } from './equip-list/equip-list.component';  
import {MatRadioModule} from '@angular/material/radio';
import { EquipDetailComponent } from './equip-detail/equip-detail.component'; 
import {MatExpansionModule} from '@angular/material/expansion';
import { DevCodetableComponent } from './dev-codetable/dev-codetable.component';
import { EtcComponent } from './etc/etc.component';
import { EquipComparisonComponent } from './equip-comparison/equip-comparison.component'; 

export function soliProviderFactory(provider: SoliProviderService) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    AgentListComponent,
    AgentDetailComponent,
    ItemMaterialsComponent,
    QuestListComponent,
    ItemMaterialsDetailComponent,
    QuestDetailComponent,
    AgentMotionComponent,
    GladiaListComponent,
    GladiaDetailComponent,
    CocoonListComponent,
    CocoonDetailComponent,
    UnderbarEliminator,
    IndexComponent,
    DevEquipRecipieComponent,
    DevComponent,
    DevEquipComponent,
    EquipListComponent,
    EquipDetailComponent,
    DevCodetableComponent,
    EtcComponent,
    EquipComparisonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatAutocompleteModule,
    ClipboardModule,
    MatRadioModule,
    MatExpansionModule,
  ],
  providers: [
    SoliProviderService, 
    { provide: APP_INITIALIZER, useFactory: soliProviderFactory, deps: [SoliProviderService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

/* solution for Scrolling issue*/
    constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events.pipe(
      filter((e): e is Scroll => e instanceof Scroll)
    ).subscribe(e => {
      if (e.position) {
        // backward navigation
        setTimeout(() => {viewportScroller.scrollToPosition(e.position); }, 0);
      } else if (e.anchor) {
        // anchor navigation
        setTimeout(() => {viewportScroller.scrollToAnchor(e.anchor); }, 0);
      } else {
        // forward navigation
        setTimeout(() => {viewportScroller.scrollToPosition([0, 0]); }, 0);
      }
    });
  }
//////////////////////////////////////////////
}




