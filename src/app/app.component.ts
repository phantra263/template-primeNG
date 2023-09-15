import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from './services/loading.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  items: MenuItem[] = [{
      label: 'Profile',
      icon: 'pi pi-user',
      routerLink: '/form'
    },
    {
      label: 'Logout',
      icon: 'pi pi-power-off',
      command: () => {
        this.logout();
      }
    }];
  visibleSidebar1: boolean = true;
  dockItems: any[] = [
    {
        label: 'Form',
        icon: "pi pi-credit-card",
        link: "/form"
    },
    {
        label: 'Calendar',
        icon: "pi pi-calendar",
        link: "/calendar"
    },
    {
        label: 'Drag drop',
        icon: "pi pi-sliders-h",
        link: "/drag-drop"
    },
    {
        label: 'Chart',
        icon: "pi pi-chart-bar",
        link: "/chart"
    },
    {
      label: 'Backlog',
      icon: "pi pi-chart-bar",
      link: "/backlog"
  }
  ];
  collapse: boolean = false;
  isLoading: boolean = false; 
  isLogin: boolean = true;
  constructor(
    private router: Router, 
    public loadingService: LoadingService
  ) { 
    this.loadingService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  };  
  
  ngOnInit() {}
  
  // Use HostListener to listen for window resize events to collapse menu
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth < 1000) {
      this.collapse = true;
    } else this.collapse = false;
  }

  logout() {
    alert('logout')
  }
}
