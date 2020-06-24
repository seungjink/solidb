import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtcRoutingModule } from './etc-routing.module';
import { EtcComponent } from './etc.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [EtcComponent],
  imports: [
    CommonModule,
    EtcRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class EtcModule { }
