import { Component, Directive } from '@angular/core';
import { Trainings } from './model/trainings.models';
import { CartService } from './services/cart.service';
import { inject } from '@angular/core/testing';
import { window } from 'rxjs';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainings-front-app';

  constructor(public authService : AuthService){}
}
