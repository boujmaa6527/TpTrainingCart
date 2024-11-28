import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
 
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isUser()) {
      return true;
    } else {
      this.router.navigate(['/trainings']);
      return false;
    }
  }
}