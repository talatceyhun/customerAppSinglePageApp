import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerAddComponent } from './customerAdd/customerAdd.component';
import { CustomerUpdateDeleteComponent } from './customerUpdateDelete/customerUpdateDelete.component';

@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      NavComponent,
      CustomerComponent,
      CustomerAddComponent,
      CustomerUpdateDeleteComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      FormsModule, 
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
