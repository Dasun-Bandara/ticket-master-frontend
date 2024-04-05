import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { CreateTicketComponent } from './view/create-ticket/create-ticket.component';
import {FormsModule} from "@angular/forms";
import { CheckOutComponent } from './view/check-out/check-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateTicketComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
