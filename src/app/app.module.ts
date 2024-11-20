import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component'

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CartComponent,
    CustomerComponent,
    OrdersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
