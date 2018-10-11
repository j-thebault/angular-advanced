import {AbstractControl} from '@angular/forms';

export const INVALID_BRANCH_ERROR_CODE = 'INVALID_BRANCH_ERROR_CODE';

export class StockInventoryValidators {

  static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i;
    const valid = regexp.test(control.value);
    return valid ? true : {INVALID_BRANCH_ERROR_CODE: true};
  }
}
