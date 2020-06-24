import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevEquipRoutingModule } from './dev-equip-routing.module';
import { DevEquipComponent } from './dev-equip.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [DevEquipComponent],
  imports: [
    CommonModule,
    DevEquipRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ClipboardModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ]
})
export class DevEquipModule { }
