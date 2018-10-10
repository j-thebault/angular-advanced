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
    </div>
  `
})
export class AppComponent {
}
