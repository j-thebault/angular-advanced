import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div>
     <label>
       Credit Card Number
       <input name="credit-card" type="text" placeholder="Enter your 16-digit card number" appCreditCard/>
     </label>
      <label appTooltip="3 digits, back of your card" #myToolTip="tooltip">
        Enter your security code
        <span (mouseover)="myToolTip.show()" (mouseleave)="myToolTip.hide()">
          (?)
        </span>
        <input type="text">
      </label>
    </div>
  `
})
export class AppComponent {
}
