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
        </label>
        <label>
          Manager Code
          <input type="text" placeholder="Manager Code" formControlName="code"/>
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

}
