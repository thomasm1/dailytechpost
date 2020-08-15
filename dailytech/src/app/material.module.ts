import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule
  ],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule]
})
export class MaterialModule { }
