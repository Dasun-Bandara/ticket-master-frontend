import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateTicketComponent} from "./view/create-ticket/create-ticket.component";
import {CheckOutComponent} from "./view/check-out/check-out.component";
import {CurrentComponent} from "./view/current/current.component";
import {HistoryComponent} from "./view/history/history.component";
import {ChargersComponent} from "./view/chargers/chargers.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/create-ticket'
  },
  {
    path: 'create-ticket',
    component: CreateTicketComponent
  },
  {
    path: 'check-out',
    component: CheckOutComponent
  },
  {
    path: 'current',
    component: CurrentComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'chargers',
    component: ChargersComponent
  },
  {
    path: '**',
    component: CreateTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
