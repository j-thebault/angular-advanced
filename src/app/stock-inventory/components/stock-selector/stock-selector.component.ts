import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Product} from '../../models/product.interface';

@Component({
  selector: 'app-stock-selector',
  template: `
    <div class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">No stock selected</option>
          <option *ngFor="let product of products" [value]="product.id">{{product.name}}</option>
        </select>
        <app-stock-counter [step]="10" [min]="10" [max]="1000" formControlName="quantity"></app-stock-counter>
        <button type="button" (click)="onAdd()" [disabled]="stockExists || notSelected">Add Stock</button>
        <div
          class="stock-selector__error"
          *ngIf="stockExists"
        >
          The selected product already exist in stock
        </div>
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

  get stockExists() {
    return this.parent.hasError('stockExists') && this.parent.get('selector.product_id').dirty;
  }

  get notSelected() {
    return !this.parent.get('selector.product_id').value;
  }
}
