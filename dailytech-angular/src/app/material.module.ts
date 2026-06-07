import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';  // For BreakpointObserver
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';  // Standard MatDialog
import { MatLegacyDialogModule } from '@angular/material/legacy-dialog';  // Legacy MatDialog
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';  
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatTreeModule } from '@angular/material/tree'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule, 
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,  // Standard MatDialog
    MatLegacyDialogModule,  // Legacy MatDialog
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
    // MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatStepperModule,
    MatBadgeModule,
    // MatAutocompleteModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatDividerModule,
    // MatRadioModule,
    MatRippleModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    MatTreeModule
  ],
  exports: [
      MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule, 
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,  // Standard MatDialog
    MatLegacyDialogModule,  // Legacy MatDialog
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    MatExpansionModule,
    // MatChipsModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatStepperModule,
    MatBadgeModule,
    // MatAutocompleteModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatDividerModule,
    // MatRadioModule,
    MatRippleModule,
    // MatSliderModule,
    // MatSlideToggleModule, 
    MatTreeModule
       ]
})
export class MaterialModule { }
