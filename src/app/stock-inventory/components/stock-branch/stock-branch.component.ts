import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

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

  @Input()
  parent: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

  required(controlName: string): boolean {
    console.log(this.parent);
    return (
      this.parent.get(`store.${controlName}`).hasError('required') &&
      !this.parent.get(`store.${controlName}`).pristine
    );
  }

}
