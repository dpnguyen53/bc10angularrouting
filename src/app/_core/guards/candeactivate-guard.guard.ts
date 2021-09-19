import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { RegisterComponent } from 'src/app/Pages/home-template/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(component: any) {
    return component.canDeactivateRegister() || window.confirm('Bạn có muốn rời trang không?');
  }
}
