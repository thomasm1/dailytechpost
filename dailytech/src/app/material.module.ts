import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
  

 
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCheckboxModule, MatDatepickerModule, MatToolbarModule, MatSidenavModule, MatListModule  
  ],
  exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCheckboxModule, MatDatepickerModule, MatToolbarModule, MatSidenavModule, MatListModule ]
})
export class MaterialModule { }
