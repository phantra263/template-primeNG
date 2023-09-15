import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root',
})
export class LoadingGuard implements CanActivate {
  constructor(private loadingService: LoadingService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.loadingService.show();

    // cho thanh progress bar chạy 1 khoảng thời gian cố định
    setTimeout(() => {
      this.loadingService.hide();
    }, 600); 

    return true;
  }
}
