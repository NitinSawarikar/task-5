import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider'
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule
  ],
  exports : [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    MatRadioModule,
    MatCardModule
  ]
})
export class ModulesModule { }
