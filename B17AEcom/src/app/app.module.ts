import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {  MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import {  MatDividerModule } from "@angular/material/divider";
import { PriceFilterComponent } from './price-filter/price-filter.component';
import { MatSliderModule } from "@angular/material/slider";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FilterlistComponent } from './filterlist/filterlist.component';
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    PriceFilterComponent,
    SearchbarComponent,
    ProductlistComponent,
    FilterlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatSliderModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
