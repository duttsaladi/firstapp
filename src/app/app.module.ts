import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';


import 'hammerjs';
import { LeaderService } from './services/leader.service';
import { LoginComponent } from './login/login.component';
import {HttpModule} from '@angular/http';
import {baseURL} from './shared/baseurl';
import { ProcessHttpMsgService} from './services/process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MaterialModule, FlexLayoutModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [ DishService, PromotionService, LeaderService,   {provide: 'BaseURL', useValue: baseURL}, ProcessHttpMsgService ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
