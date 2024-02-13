import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-order-collection',
  templateUrl: './order-collection.component.html',
  styleUrls: ['./order-collection.component.css']
})
export class OrderCollectionComponent implements OnInit {
  @Input() collection: string; // collection name
  @Input() items: any[]; // collection of items
  @Input() filterArg: string; // filter argument

  constructor(private database: BackendService) { }

  ngOnInit(): void {
  }

  // restocks items
  restock(item: any, amount: string) {
    if (amount == "" || parseInt(amount) <= 0) {
      alert("Enter restock amount above 0")
    } else {
      item.Amount = item.Amount + parseInt(amount)
      this.database.updateItem(item, this.collection).subscribe(() => (this.items = this.items.filter(
        (item: { Amount: number, RestockLevel: number }) => item.RestockLevel > item.Amount)))
    }
  }

  // calculates recomended of items to order
  getRecomended(item: any) {
    return item.RestockLevel - item.Amount
  }

}
