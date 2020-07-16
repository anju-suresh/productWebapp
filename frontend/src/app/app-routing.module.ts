import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component'

import { from } from 'rxjs';

const routes: Routes = [
  {path:'products',component:ProductListComponent},
  {path:'add',component:NewProductComponent},
  {path:'update/:pid',component:UpdateProductComponent},
  {path:"",component:LoginComponent},
  {path:'register',component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
