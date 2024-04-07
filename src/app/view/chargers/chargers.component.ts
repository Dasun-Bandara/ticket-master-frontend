import { Component } from '@angular/core';
import {ChargeDto} from "../../dto/charge.dto";

@Component({
  selector: 'app-chargers',
  template: `
    <header class="mt-5">
      <h1 class="title fs-2 text-center">Chargers</h1>
    </header>
    <main>
      <div class="ps-2 pe-2 mt-5">
        <div class="category-box d-grid">
          <h6>VEHICLE CATEGORY</h6>
          <h6>CHARGE PER HOUR</h6>
          <h6>EDIT CHARGE</h6>
          <h6>SAVE CHARGE</h6>
        </div>
        @for (charge of chargers; track charge.vehicleCategory){
          <app-charge-row [charge]="charge"></app-charge-row>
        }
      </div>
    </main>
  `,
  styleUrl: './chargers.component.scss'
})
export class ChargersComponent {
  chargers: Array<ChargeDto> = [
    new ChargeDto("BIKE",30),
    new ChargeDto("THREE_WHEEL",50),
    new ChargeDto("CAR",80),
    new ChargeDto("BUS",100),
    new ChargeDto("OTHER",100)
  ]

}
