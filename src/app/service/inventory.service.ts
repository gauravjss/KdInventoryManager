import { Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map, retry, catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {Inventory} from '../models/inventory';
import {HEADER_PARAMS} from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class InventoryService implements OnInit  {

  baseURL = environment.baseUrl;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {
  }

  getInventoryData(): Observable<Inventory[]> {
    return this._httpClient.get(`${this.baseURL}/kdInventoryManager`).pipe(
      map( data => {
        return Object.values(data)[0];
      }),
      retry(2),
      catchError(this.handleError)
    );
  }

  addInventoryData(inventory: Inventory): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders(HEADER_PARAMS)
    };
    const inventoryItemBody = `{
    "Name":" ${inventory.Name}",
    "Description":" ${inventory.Description}",
    "Price": ${inventory.Price},
    "QR_Code": "${inventory.QR_Code}",
    "Weight":" ${inventory.Weight}",
    "Location":" ${inventory.Location}",
    "Quantity": ${inventory.Quantity}
    }`;
    return this._httpClient.post<any>(`${this.baseURL}/kdInventoryManager`,
      inventoryItemBody ,
      httpOptions).pipe(catchError(this.handleError));
  }

  updateInventory(inventory: Inventory, action: string, quantity: number): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders(HEADER_PARAMS)
    };
    const inventoryItemBody = `{
    "Name":" ${inventory.Name}",
    "Description":" ${inventory.Description}",
    "Price": ${inventory.Price},
    "QR_Code": ${inventory.QR_Code},
    "Weight":" ${inventory.Weight}",
    "Location":" ${inventory.Location}",
    "Quantity": ${inventory.Quantity}
    }`;
    return this._httpClient.patch<any>(`${this.baseURL}/kdInventoryManager/${inventory._id}/${action}/${quantity}`,
      inventoryItemBody ,
      httpOptions).pipe(catchError(this.handleError));
  }

  deleteInventory(_id: number): Observable<Inventory[]> {
    return this._httpClient.delete(`${this.baseURL}/kdInventoryManager/${_id}`).pipe(
      map( data => {
        return Object.values(data);
      }),
      retry(2),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
