import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormArray} from '@angular/forms';
import {Product} from '../../models/product.interface';
import {StockInventoryService} from '../../services/stock-inventory.service';
import {forkJoin} from 'rxjs';
import {CartItem} from '../../models/cart-item.interface';

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
          [parent]="form"
          [map]="productMap"
          (removed)="removeStock($event)"></app-stock-products>

        <div>
          Total: {{total | currency:'USD':'symbol'}}
        </div>

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

  products: Product[];

  productMap: Map<number, Product>;

  form = this.fb.group({
    store: this.fb.group({
      branch: '',
      code: ''
    }),
    selector: this.createStock({}),
    stock: this.fb.array([])
  });

  total: number;

  constructor(private fb: FormBuilder, private stockService: StockInventoryService) {
  }

  ngOnInit() {
    const cart$ = this.stockService.getCartItems();
    const products$ = this.stockService.getProducts();

    forkJoin(cart$, products$).subscribe(([cart, products]: [CartItem[], Product[]]) => {
      console.log(products);
      console.log(cart);
      this.products = products;

      const myMap = products.map<[number, Product]>(product => [product.id, product]);

      this.productMap = new Map(myMap);

      cart.forEach(item => {
        const control = this.form.get('stock') as FormArray;
        control.push(this.createStock(item));
      });

      this.calculateTotal(this.form.get('stock').value);

      this.form.get('stock').valueChanges.subscribe(value => {
        console.log(value);
        this.calculateTotal(value);
      });

      this.form.get('selector').disable();
    });

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

  calculateTotal(value: [CartItem]) {
    const total = value.reduce((accumulation, currentProduct) => {
      const productId = currentProduct.product_id;
      const quantity = currentProduct.quantity;

      const price = this.productMap.get(productId).price;
      return quantity * price + accumulation;
    }, 0);
    this.total = total;
  }
}
