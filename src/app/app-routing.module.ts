import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path : "trainings", component : TrainingsComponent },
  {path : "cart", component : CartComponent },
  {path : "customer", component : CustomerComponent },
  {path : "order", component : OrdersComponent },
  {path : "users", component : UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
