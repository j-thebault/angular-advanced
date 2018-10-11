import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Product} from '../../models/product.interface';

@Component({
  selector: 'app-stock-selector',
  template: `
    <div class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <label>
          Select Stock
          <select formControlName="product_id">
            <option value="">No stock selected</option>
            <option *ngFor="let product of products" [value]="product.id">{{product.name}}</option>
          </select>
        </label><br>
        <label>
          Quantity
          <app-stock-counter [step]="10" [min]="10" [max]="1000" formControlName="quantity"></app-stock-counter>
        </label><br>
        <button type="button" (click)="onAdd()">Add Stock</button>
      </div>
    </div>
  `,
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {

  @Input()
  parent: FormGroup;

  @Input()
  products: Product[];

  @Output()
  added: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onAdd() {
    this.added.emit(
      this.parent.get('selector').value
    );
    this.parent.get('selector').reset({product_id: '', quantity: 10});
  }
}
