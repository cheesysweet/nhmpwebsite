import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-collection',
  templateUrl: './admin-collection.component.html',
  styleUrls: ['./admin-collection.component.css']
})
export class AdminCollectionComponent implements OnInit {
  @Input() collection: string; // name of collection
  @Input() items: any[]; // items stored in collection
  @Input() filterArg: string; // filter argument
  closeResult = '';
  editItem: any; // edit item

  constructor(private database: BackendService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  // deletes item from database
  deleteItem() {
    var id = this.editItem._id
    const deleteItem = `${this.collection}/${id}`
    this.database.deleteItem(deleteItem).subscribe(() => (this.items = this.items.filter((item: { _id: string; }) => item._id !== id)))
  }

  // opens popup window to edit values of item
  edit(item: any, editContent: any) {
    this.editItem = item
    this.open(editContent)
  }

  // edites the values of a item
  editItems() {
    this.database.updateItem(this.editItem, this.collection).subscribe()
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
