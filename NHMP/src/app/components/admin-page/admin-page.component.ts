import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  clothes: any; // collection of clothes
  gear: any; // collection of gear
  cars: any; // collection of cars
  filterArg: string;
  clotheString = "clothes"
  gearString = "gear"
  carString = "cars"
  closeResult = '';
  alerts: string[];
  
  // creates a new item that forces a collection to be choosen
  newItem = this.formBuilder.group({
    Name: '',
    Type: '',
    Amount: '',
    RestockLevel: '',
    ThresholdLevel: '',
    collection: new FormControl('', Validators.required)
  })

  constructor(private database: BackendService, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  // used to find a type of item
  findType(filterString: string) {
    this.filterArg = filterString
  }

  // gets the collections from the database
  ngOnInit(): void {
    this.database.getItems(this.clotheString).subscribe(clothes => this.clothes = clothes)
    this.database.getItems(this.gearString).subscribe(gear => this.gear = gear)
    this.database.getItems(this.carString).subscribe(car => this.cars = car)
  }

  // popup to add new item
  addItem() {
    var collection = this.getCollection(this.newItem.value.collection)
    this.database.addItem(this.newItem.value, this.newItem.value.collection).subscribe(item => collection.push(item))
    this.newItem.reset()
  }

  // get a collection depending on string
  getCollection(collection: string) {
    switch (collection) {
      case this.clotheString:
        return this.clothes;
      case this.gearString:
        return this.gear;
      case this.carString:
        return this.cars;
    }
  }

  // Alert for items that needs to be orderd
  itemsToOrder(items: any) {
    var orderItems: any[] = []

    for (var i=0; i<items.length; i++) {
      if (items[i].RestockLevel > items[i].Amount) {
        orderItems.push(items[i])
      }
    }
    return orderItems
  }

  // popup window
  open(editContent: any) {
    this.modalService.open(editContent,
    {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = 
          `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
