import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GladiaListRoutingModule } from './gladia-list-routing.module';
import { GladiaListComponent } from './gladia-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [GladiaListComponent],
  imports: [
    CommonModule,
    GladiaListRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule
  ]
})
export class GladiaListModule { }
