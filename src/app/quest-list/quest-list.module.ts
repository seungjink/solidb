import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestListRoutingModule } from './quest-list-routing.module';
import { QuestListComponent } from './quest-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [QuestListComponent],
  imports: [
    CommonModule,
    QuestListRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
  ]
})
export class QuestListModule { }
