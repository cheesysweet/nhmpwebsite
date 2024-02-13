import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  clothes: any; // collection of clothes
  gear: any; // collection of gear
  cars: any; // collection of cars
  filterArg: string; // filter argument
  clotheString = "clothes"
  gearString = "gear"
  carString = "cars"
  

  constructor(private database: BackendService) { }

  // fetches collections from database
  ngOnInit(): void {
    this.database.getItems(this.clotheString).subscribe(clothes => this.clothes = this.itemsToOrder(clothes))
    this.database.getItems(this.gearString).subscribe(gear => this.gear = this.itemsToOrder(gear))
    this.database.getItems(this.carString).subscribe(car => this.cars = this.itemsToOrder(car))
  }

  // gets items with stored amount lower than threshold values.
  itemsToOrder(items: any) {
    var orderItems: any[] = []

    for (var i=0; i<items.length; i++) {
      if (items[i].RestockLevel > items[i].Amount) {
        orderItems.push(items[i])
      }
    }
    return orderItems
  }

}
