import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {Product} from '../../models/product.interface';

@Component({
  selector: 'app-stock-products',
  template: `
    <div class="stock-products" [formGroup]="parent">
      <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index">
          <div class="stock-product__content" [formGroupName]="i">
            <div class="stock-product__name">{{getProduct(item.value.product_id).name}}</div>
            <div class="stock-product__price">{{getProduct(item.value.product_id).price | currency:'USD':true}}</div>
            <input
              type="number"
              step="10"
              min="10"
              max="1000"
              formControlName="quantity"
            />
            <button type="button" (click)="remove(item,i)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Input()
  map: Map<number, Product>;

  @Output()
  removed: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }

  getProduct(productId): Product {
    return this.map.get(productId);
  }

  remove(group, index) {
    this.removed.emit({group, index});
  }

  ngOnInit() {
  }

}
