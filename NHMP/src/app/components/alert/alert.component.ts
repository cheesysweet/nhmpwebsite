import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  alerts: string[] = []; // alerts
  clotheString = "clothes"
  gearString = "gear"
  carString = "cars"

  alertClosed = false; // used for alert window

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert; // alert window
  constructor(private database: BackendService) { }

  ngOnInit(): void {
    this.database.getItems(this.clotheString).subscribe(clothes => this.checkAlerts(clothes))
    this.database.getItems(this.gearString).subscribe(gear => this.checkAlerts(gear))
    this.database.getItems(this.carString).subscribe(car => this.checkAlerts(car))

    setTimeout(() => this.selfClosingAlert.close(), 15000);
  }

  // checks items with low amount that will be alerted.
  checkAlerts(items: any) {
    for (var i=0; i<items.length; i++) {
      if (items[i].ThresholdLevel >= items[i].Amount) {
        this.alerts.push(`${items[i].Name}, ${items[i].Type} needs to be ordered, the recommended amount is ${items[i].RestockLevel - items[i].Amount}`)
      }
    }
  }

}
