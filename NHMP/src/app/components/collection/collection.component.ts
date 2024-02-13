import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  @Input() collection: string; // name of collection
  @Input() items: any[]; // collection of items
  @Input() filterArg: string; // filter argument

  constructor(private database: BackendService) { }

  ngOnInit(): void {
  }

  // deletes item from database
  delete(id: string) {
    const deleteItem = `${this.collection}/${id}`
    this.database.deleteItem(deleteItem).subscribe(() => (this.items = this.items.filter((item: { _id: string; }) => item._id !== id)))
  }

  // removes a amount of items
  removeAmount(item: any, amount: string) {
    if (amount == "" || parseInt(amount) <= 0) {
      alert("amount needs to be above 0")
    } else if (item.Amount >= amount) {
      item.Amount = item.Amount - parseInt(amount)
      this.database.updateItem(item, this.collection).subscribe()
    } else {
      alert(`Not enough ${item.Name} ${item.Type}s`)
    }
  }
}
