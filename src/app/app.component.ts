import { Component, Directive } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trainings-front-app';

  constructor(public authService : AuthService, private route: Router){}
  disConnect(){
    if(this.authService.isLogged()){
      this.authService.logOut();
    }else{
      this.route.navigateByUrl("users")
    }
  }
}
