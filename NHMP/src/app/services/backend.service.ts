import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class BackendService {

  private baseUrl = environment.baseUrl
  
  constructor(private http: HttpClient) {}

  // Get all items 
  getItems(collection: string): Observable<any> {
    const url = this.baseUrl + collection
    return this.http.get<any>(url)
  }

  // Get all users
  getUsers(users : string): Observable<any> {
    const url = this.baseUrl + users
    return this.http.get<any>(url)
  }

  // Delete a item 
  deleteItem(itemId: string): Observable<any>{
    const url = `${this.baseUrl}${itemId}`
    return this.http.delete(url);
  }

  // Add a item 
  addItem(item : any, collection: string): Observable<any>{
    const url = `${this.baseUrl}${collection}`
    console.log(item)
    return this.http.post<any>(url, item); 
  }

  // Update an item
  updateItem(item : any, collection: string): Observable<any>{
    const url =  `${this.baseUrl}${collection}/${item._id}`
    return this.http.put<any>(url, item)
  }
}
