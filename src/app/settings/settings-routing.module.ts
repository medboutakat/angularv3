import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';  
import { StatutComponent } from './statut/statut.component';

import { VatComponent } from './vat/vat.component'; 
import { CustomerCategoryComponent } from './customer.category/customer.category.component'; 
const routes: Routes = [ 
  {path: 'status', component: StatutComponent}, 
  {path: 'vats', component: VatComponent},
  {path: 'customercategory', component: CustomerCategoryComponent}
];



@NgModule({
  // tslint:disable-next-line:no-trailing-whitespace
  declarations: [], 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
