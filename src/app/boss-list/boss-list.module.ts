import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BossListRoutingModule } from './boss-list-routing.module';
import { BossListComponent } from './boss-list.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [BossListComponent],
  imports: [
    CommonModule,
    BossListRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule
  ]
})
export class BossListModule { }
