import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevEquipRecipeRoutingModule } from './dev-equip-recipe-routing.module';
import { DevEquipRecipeComponent } from './dev-equip-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DevEquipRecipeComponent],
  imports: [
    CommonModule,
    DevEquipRecipeRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDividerModule,
    MatAutocompleteModule,
    ClipboardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class DevEquipRecipeModule { }
