export class VehicleDto {
  constructor(
    public parkingNumber: number|null,
    public registrationNumber: string,
    public contact: string|null,
    public category: string|null,
    public chargePerHour: number|null,
    public inTime: string|null,
    public outTime: string|null
  ) {
  }
}
