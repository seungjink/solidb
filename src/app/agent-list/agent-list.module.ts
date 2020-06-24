import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentListRoutingModule } from './agent-list-routing.module';
import { AgentListComponent } from './agent-list.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [AgentListComponent],
  imports: [
    CommonModule,
    AgentListRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule
  ]
})
export class AgentListModule { }
