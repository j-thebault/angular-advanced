import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {CartItem} from '../models/cart-item.interface';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Product} from '../models/product.interface';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class StockInventoryService {

  constructor(private http: HttpClient) {
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>('/api/cart');
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  checkBranchId(id: string): Observable<boolean> {
    let params = new HttpParams().set('id', id);
    return this.http.get('/api/branch', {params}).pipe(
      map((value: any[]) => !!value.length)
    );
  }

}
