import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDemoComponent } from './pages/page-demo/page-demo.component';
import { FormDemoComponent } from './pages/form-demo/form-demo.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/form'},
  {path: 'demo', component: PageDemoComponent},
  {path: 'form', component: FormDemoComponent},
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
