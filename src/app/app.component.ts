import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ticket-master-frontend';
}
