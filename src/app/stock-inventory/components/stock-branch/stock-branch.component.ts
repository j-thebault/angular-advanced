import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {INVALID_BRANCH_ERROR_CODE, StockInventoryValidators} from '../../containers/stock-inventory/stock-inventory.validators';

@Component({
  selector: 'app-stock-branch',
  template: `
    <div [formGroup]="parent">
      <div formGroupName="store">
        <label>
          Branch ID
          <input type="text" placeholder="Branch ID" formControlName="branch"/>
          <div class="error" *ngIf="required('branch')">
            Branch ID is Required
          </div>
          <div class="error" *ngIf="branchIsInvalid()">
            Branch ID Must be : One Letter Three Numbers
          </div>
        </label>
        <label>
          Manager Code
          <input type="text" placeholder="Manager Code" formControlName="code"/>
          <div class="error" *ngIf="required('code')">
            Manager Code is Required
          </div>
        </label>
      </div>
    </div>
  `,
  styleUrls: ['./stock-branch.component.scss']
})
export class StockBranchComponent implements OnInit {

  readonly INVALID_BRANCH_ERROR_CODE = INVALID_BRANCH_ERROR_CODE;

  @Input()
  parent: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  required(controlName: string): boolean {
    return this.hasError(controlName, 'required');
  }

  branchIsInvalid() {
    return (this.hasError('branch', INVALID_BRANCH_ERROR_CODE) && !this.required('branch'));
  }

  hasError(controlName: string, errorCode: string) {
    console.log('looking for error', errorCode, this.parent);
    return (
      this.parent.get(`store.${controlName}`).hasError(errorCode) &&
      this.parent.get(`store.${controlName}`).dirty
    );
  }

}
