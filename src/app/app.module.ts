import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// primeNg
import { EditorModule } from 'primeng/editor';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { FullCalendarModule } from '@fullcalendar/angular';
import {OrderListModule} from 'primeng/orderlist';
import {ChartModule} from 'primeng/chart';
import {DockModule} from 'primeng/dock';
import { RippleModule } from 'primeng/ripple';
import {AvatarModule} from 'primeng/avatar';
import {ProgressBarModule} from 'primeng/progressbar';
import { MenuModule } from 'primeng/menu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {CaptchaModule} from 'primeng/captcha';
import {CardModule} from 'primeng/card';
import {PickListModule} from 'primeng/picklist';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageDemoComponent } from './pages/page-demo/page-demo.component';
import { EditorComponent } from './components/editor/editor.component';
import { FormDemoComponent } from './pages/form-demo/form-demo.component';
import { FloatInputComponent } from './components/floatInput/floatInput.component';
import { CountryService } from './services/country-service';
import { ProductService } from './services/productservice';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { ChartJSComponent } from './pages/chartJS/chartJS.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { OrganizationChartComponent } from './pages/organization-chart/organization-chart.component';
import { LoginComponent } from './pages/login/login.component';
import {PasswordModule} from 'primeng/password';
import { BacklogComponent } from './pages/backlog/backlog.component';


@NgModule({
  declarations: [
    AppComponent,
    PageDemoComponent,
    EditorComponent,
    FormDemoComponent,
    FloatInputComponent,
    CalendarComponent,
    DragDropComponent,
    ChartJSComponent,
    OrganizationChartComponent,
    LoginComponent,
    BacklogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,


    EditorModule,
    SidebarModule,
    ButtonModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    FullCalendarModule,
    OrderListModule,
    ChartModule,
    DockModule,
    RippleModule,
    AvatarModule,
    ProgressBarModule,
    OrganizationChartModule,
    MenuModule,
    TieredMenuModule,
    PasswordModule,
    CaptchaModule,
    CardModule,
    PickListModule
  ],
  providers: [
    CountryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
