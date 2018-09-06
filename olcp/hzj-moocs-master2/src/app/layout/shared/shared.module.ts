import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule, MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { CourseStarComponent } from './course-star/course-star.component';
import {ErrorComponent} from './error/error.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from '../footer/footer.component';
import {CKEditorModule} from 'ng2-ckeditor';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    //非Material组件
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule

  ],
  declarations: [
    ConfirmDialogComponent,
    CourseStarComponent,
    ErrorComponent,
    FooterComponent,
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ConfirmDialogComponent,
    CourseStarComponent,
    MatExpansionModule,
    ErrorComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    CKEditorModule
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
