import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CocoonListRoutingModule } from './cocoon-list-routing.module';
import { CocoonListComponent } from './cocoon-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [CocoonListComponent],
  imports: [
    CommonModule,
    CocoonListRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule
  ]
})
export class CocoonListModule { }
