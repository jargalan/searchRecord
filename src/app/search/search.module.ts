import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule,
  MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule,
  MatExpansionModule, MatAutocompleteModule, MatCardModule } from '@angular/material';

import { SearchBoxComponent } from './component/search-box/search-box.component';
import { SearchResultComponent } from './component/search-result/search-result.component';
import { SearchService } from './service/search.service';
import { HighLightPipe } from './pipe/highlight.pipe';


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  // MatExpansionModule,
  // MatDatepickerModule,
  // MatNativeDateModule,
  // MatAutocompleteModule,
];
@NgModule({
  declarations: [
    SearchBoxComponent,
    SearchResultComponent,
    HighLightPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    modules,
  ],
  providers: [
    SearchService
  ]
})
export class SearchModule { }
