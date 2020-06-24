import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderbarEliminator } from './regex.pipe';


@NgModule({
  declarations: [UnderbarEliminator],
  exports: [UnderbarEliminator],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
