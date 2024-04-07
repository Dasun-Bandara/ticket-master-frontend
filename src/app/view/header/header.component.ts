import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <h1 id="title" class="fs-1 p-4 text-center">
        Ticket Master
      </h1>
      <nav class="d-flex list-inline justify-content-center pb-2 border-bottom">
        <li routerLink="create-ticket" routerLinkActive="link-activated" class="nav-item">CREATE TICKET</li>
        <li routerLink="check-out" routerLinkActive="link-activated" class="nav-item">CHECK OUT</li>
        <li routerLink="current" routerLinkActive="link-activated" class="nav-item">CURRENT</li>
        <li routerLink="history" routerLinkActive="link-activated" class="nav-item">HISTORY</li>
        <li routerLink="chargers" routerLinkActive="link-activated" class="nav-item">CHARGERS</li>
      </nav>
    </header>
    <router-outlet></router-outlet>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
