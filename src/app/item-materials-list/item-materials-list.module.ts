import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemMaterialsListRoutingModule } from './item-materials-list-routing.module';
import { ItemMaterialsListComponent } from './item-materials-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [ItemMaterialsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ItemMaterialsListRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule
  ]
})
export class ItemMaterialsListModule { }

