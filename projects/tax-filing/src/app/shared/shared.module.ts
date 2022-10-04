import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdVatsbtintraLibModule } from '../../../../../dist/rd-vatsbtintra-lib';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdVatsbtintraLibModule,

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RdVatsbtintraLibModule,
  ]
})
export class SharedModule { }
