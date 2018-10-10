import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormArray} from '@angular/forms';
import {Product} from '../../models/product.interface';

@Component({
  selector: 'app-stock-inventory',
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <app-stock-branch
          [parent]="form"></app-stock-branch>
        <app-stock-selector
          [parent]="form" [products]="products" (added)="addStock($event)"></app-stock-selector>
        <app-stock-products
          [parent]="form" (removed)="removeStock($event)"></app-stock-products>

        <div class="stock-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">Order Stock</button>
        </div>

        <pre>{{form.value | json}}</pre>

      </form>
    </div>
  `,
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {

  products: Product[] = [
    {id: 1, price: 2800, name: 'Mac Book Pro'},
    {id: 2, price: 50, name: 'USB-C Adaptor'},
    {id: 3, price: 400, name: 'iPod'},
    {id: 4, price: 900, name: 'iPhone'},
    {id: 5, price: 600, name: 'Apple Watch'}
  ];

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),
    stock: this.fb.array([
      this.createStock({product_id: 1, quantity: 10}),
      this.createStock({product_id: 3, quantity: 50})
    ])
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

  }

  onSubmit() {
    console.log('Submit', this.form.value);
  }

  createStock(stock): FormGroup {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || '',
      quantity: stock.quantity || 50
    });
  }

  addStock($event: any) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock($event));
  }

  removeStock($event: any) {
    const control = this.form.get('stock') as FormArray;
    control.removeAt($event.index);
  }
}
