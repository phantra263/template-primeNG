import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDemoComponent } from './pages/page-demo/page-demo.component';
import { FormDemoComponent } from './pages/form-demo/form-demo.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { ChartJSComponent } from './pages/chartJS/chartJS.component';
import { LoadingGuard } from './guards/loading.guard';
import { LoginComponent } from './pages/login/login.component';
import { BacklogComponent } from './pages/backlog/backlog.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/form'},
  {path: 'login', component: LoginComponent},
  {path: 'demo', canActivate: [LoadingGuard], component: PageDemoComponent},
  {path: 'form', canActivate: [LoadingGuard], component: FormDemoComponent},
  {path: 'calendar', canActivate: [LoadingGuard], component: CalendarComponent},
  {path: 'drag-drop', canActivate: [LoadingGuard], component: DragDropComponent},
  {path: 'chart', canActivate: [LoadingGuard], component: ChartJSComponent},
  {path: 'backlog', canActivate: [LoadingGuard], component: BacklogComponent},
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
