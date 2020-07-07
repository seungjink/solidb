import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// For Scrolling Issue////////////////////////
import {Router, Scroll} from '@angular/router';
import {ViewportScroller} from '@angular/common'
import { filter } from 'rxjs/operators';
//////////////////////////////////////////////

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';

import { SoliProviderService } from './shared/soli-provider.service';
import { ItemMaterialsDetailComponent } from './item-materials-detail/item-materials-detail.component';
import { QuestDetailComponent } from './quest-detail/quest-detail.component';
import { FormsModule } from '@angular/forms';
import { AgentMotionComponent } from './agent-motion/agent-motion.component';
import { GladiaDetailComponent } from './gladia-detail/gladia-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CocoonDetailComponent } from './cocoon-detail/cocoon-detail.component';
import { IndexComponent } from './index/index.component';
import { DevComponent } from './dev/dev.component';
import { EquipDetailComponent } from './equip-detail/equip-detail.component'; 
import { DevCodetableComponent } from './dev-codetable/dev-codetable.component';
import { EquipComparisonComponent } from './equip-comparison/equip-comparison.component'; 
import { MatTabsModule } from '@angular/material/tabs'; 
import { SharedModule } from './shared/shared.module';

export function soliProviderFactory(provider: SoliProviderService) {
  return () => provider.load();
}

@NgModule({
  declarations: [
    AppComponent,
    AgentDetailComponent,
    ItemMaterialsDetailComponent,
    QuestDetailComponent,
    AgentMotionComponent,
    GladiaDetailComponent,
    CocoonDetailComponent,
    IndexComponent,
    DevComponent,
    EquipDetailComponent,
    DevCodetableComponent,
    EquipComparisonComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],

  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
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




