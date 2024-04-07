import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { CreateTicketComponent } from './view/create-ticket/create-ticket.component';
import {FormsModule} from "@angular/forms";
import { CheckOutComponent } from './view/check-out/check-out.component';
import { CurrentComponent } from './view/current/current.component';
import { HistoryComponent } from './view/history/history.component';
import { ChargersComponent } from './view/chargers/chargers.component';
import { ChargeRowComponent } from './view/charge-row/charge-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateTicketComponent,
    CheckOutComponent,
    CurrentComponent,
    HistoryComponent,
    ChargersComponent,
    ChargeRowComponent
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
