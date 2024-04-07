import {Component, Input} from '@angular/core';
import {ChargeDto} from "../../dto/charge.dto";

@Component({
  selector: 'app-charge-row',
  template: `
      <div class="category-box d-grid">
        <div>{{charge.vehicleCategory}}</div>
        <div>
          <input type="text" class="form-control text-center" [disabled]=isDisableText value="{{charge.chargePerHour}}">
        </div>
        <div>
          <button type="button" class="btn btn-warning" (click)="editOnAction()">EDIT</button>
        </div>
        <div>
          <button type="button" class="btn btn-primary" (click)="saveOnAction()">SAVE</button>
        </div>
      </div>
  `,
  styleUrl: './charge-row.component.scss'
})
export class ChargeRowComponent {
  @Input()
  charge!: ChargeDto;

  isDisableText: boolean = true;

  editOnAction() {
    this.isDisableText = false;
  }

  saveOnAction() {
    this.isDisableText = true;
  }
}
