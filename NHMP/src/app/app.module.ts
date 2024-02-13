import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { OfficerPageComponent } from './components/officer-page/officer-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { CollectionComponent } from './components/collection/collection.component';
import { AdminCollectionComponent } from './components/admin-collection/admin-collection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { OrderCollectionComponent } from './components/order-collection/order-collection.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    OrderPageComponent,
    OfficerPageComponent,
    FilterPipe,
    FilterComponent,
    CollectionComponent,
    AdminCollectionComponent,
    LoginComponent,
    OrderCollectionComponent,
    AlertComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
