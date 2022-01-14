import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:'books',  component: ProductlistComponent},
  { path: '', component: ProductlistComponent },
  { path: '', component: ProductlistComponent, pathMatch: 'full' },
  { path: 'filter', component: ProductlistComponent },
  { path: 'search', component: ProductlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
