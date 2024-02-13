import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-officer-page',
  templateUrl: './officer-page.component.html',
  styleUrls: ['./officer-page.component.css']
})
export class OfficerPageComponent implements OnInit {
  clothes: any; // collection of clothes
  gear: any; // collection of gear
  cars: any; // collection of cars
  filterArg: string;
  clotheString = "clothes"
  gearString = "gear"
  carString = "car"
  

  constructor(private database: BackendService) { }

  findType(filterString: string) {
    this.filterArg = filterString
  }

  // gets collections from database
  ngOnInit(): void {
    this.database.getItems("clothes").subscribe(clothes => this.clothes = clothes)
    this.database.getItems("gear").subscribe(gear => this.gear = gear)
    this.database.getItems("cars").subscribe(car => this.cars = car)
  }

}
