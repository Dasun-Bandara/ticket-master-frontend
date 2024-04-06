import { Component } from '@angular/core';
import {VehicleDto} from "../../dto/vehicle.dto";

@Component({
  selector: 'app-current',
  styleUrl: './current.component.scss',
  template: `
    <header class="mt-5">
      <h1 class="title fs-2 text-center">Available Vehicles</h1>
    </header>
    <main>
      <div class="input-box mb-3 pe-2 ps-2 mt-3 align-items-center">
        <input required ngModel pattern="^[A-Z0-9-]{6,10}$" name="reg-number" type="text" class="form-control" id="registration-number" placeholder="Enter vehicle registration number to search">
      </div>
      <div class="ps-2 pe-2">
        <table class="table table-bordered text-center">
          <thead>
            <tr>
              <th>PARKING NO</th>
              <th>REGISTRATION NO</th>
              <th>CONTACT</th>
              <th>CATEGORY</th>
              <th>CHECK IN</th>
            </tr>
          </thead>
          <tbody>
            @for (vehicle of vehicles; track vehicle.parkingNumber){
              <tr>
                <td>{{vehicle.parkingNumber}}</td>
                <td>{{vehicle.registrationNumber}}</td>
                <td>{{vehicle.contact}}</td>
                <td>{{vehicle.category}}</td>
                <td>{{vehicle.inTime}}</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </main>
  `
})
export class CurrentComponent {
  vehicles: Array<VehicleDto> = [
    new VehicleDto(1,"ABC-1234","077-1234567","BIKE",30,"2024-04-04","2024-04-05"),
    new VehicleDto(2,"PH-4263","070-1234567","CAR",80,"2024-04-03","2024-04-04"),
    new VehicleDto(3,"XPY-3476","071-1234567","BUS",100,"2024-04-02","2024-04-03"),
    new VehicleDto(4,"48-8765","078-1234567","OTHER",100,"2024-04-05","2024-04-07"),
    new VehicleDto(5,"QS-3006","075-1234567","THREE_WHEEL",50,"2024-04-05","2024-04-06")
  ]
}
