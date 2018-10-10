import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import {ReactiveFormsModule} from '@angular/forms';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports:[StockInventoryComponent],
  declarations: [StockInventoryComponent, StockBranchComponent, StockSelectorComponent, StockProductsComponent]
})
export class StockInventoryModule { }