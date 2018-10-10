import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div>
      <ul>
        <li *ngFor="let item of items; let i = index">
          {{i}} Member: {{item.name | json}}
        </li>
        <ng-template appMyFor [appMyForOff]="items" let-item let-i="index">
          <li>
            {{i}} Member: {{item.name | json}}
          </li>
        </ng-template>
      </ul>
    </div>
  `
})
export class AppComponent {
  items = [{
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  }, {
    name: 'Tom Delonge',
    age: 41,
    location: 'California'
  }, {
    name: 'Travis Barker',
    age: 41,
    location: 'California'
  }];

  constructor() {
    setTimeout(() => {
      this.items = [...this.items, {name: 'Matt Skiba', age: 40, location: 'California'}];
    }, 2000);
  }
}
