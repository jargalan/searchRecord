import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchModule } from './search/search.module';
import { SearchResultComponent } from './search/component/search-result/search-result.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: SearchResultComponent },
    ]),
    BrowserAnimationsModule,
    SearchModule,
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

