import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})

export class VehicleListComponent implements OnInit {

  vehicles: Array<Vehicle> = [];
  brandsNumbers = {}

  constructor(private bookService: VehicleService) { }

  getVehicles(): void {
    this.bookService.getVehicles().subscribe((vehicles) => {
      this.vehicles = vehicles;
      this.getBrandsNumbers();
    });
  }

  getBrandsNumbers() {
    const brands = this.vehicles.map(vehicle => vehicle.marca);
    const brandsNumbers : { [key: string]: number }  = {}

    for (let i = 0; i < brands.length; i++) {
      const brand = brands[i];
      brandsNumbers[brand] = (brandsNumbers[brand] || 0) + 1
    }

    this.brandsNumbers = brandsNumbers
  }


  ngOnInit() {
    this.getVehicles()
  }

}
