import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipListRoutingModule } from './equip-list-routing.module';
import { EquipListComponent } from './equip-list.component';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [EquipListComponent],
  imports: [
    CommonModule,
    EquipListRoutingModule,
    SharedModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatSortModule,
    MatButtonModule
  ]
})
export class EquipListModule { }
