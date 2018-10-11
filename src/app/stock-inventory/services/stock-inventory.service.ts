import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CartItem} from '../models/cart-item.interface';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Product} from '../models/product.interface';

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

}
