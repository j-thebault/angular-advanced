import {AbstractControl} from '@angular/forms';

export const INVALID_BRANCH_ERROR_CODE = 'INVALID_BRANCH_ERROR_CODE';

export class StockInventoryValidators {

  // In our case control will be the top level form group
  static checkStockExists(control: AbstractControl) {
    const stockItems = control.get('stock');
    const selector = control.get('selector');

    if (!(stockItems && selector)) {
      return null;
    }

    const exists = stockItems.value.some(stockItem => {
      return stockItem.product_id === parseInt(selector.value.product_id, 10);
    });

    return exists ? {stockExists: true} : null;
  }

  static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);
    return valid ? true : {INVALID_BRANCH_ERROR_CODE: true};
  }
}
