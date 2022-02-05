import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'addProduct', component : AddProductComponent},
  {path : 'listProduct', component : ListProductComponent},
  {path : 'product/:id', component : ProductComponent},
  {path : "", redirectTo : 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
