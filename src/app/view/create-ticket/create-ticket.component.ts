import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrl: './create-ticket.component.scss'
})
export class CreateTicketComponent {
  regNo = "";
  contact = "";
  category = false;
  // @ViewChild("frmNgForm")
  // frmNgFormElm!: NgForm;
}
