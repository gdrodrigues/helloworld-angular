import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [CursosComponent],
  exports: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }
