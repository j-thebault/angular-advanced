import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';

interface File {
  name: string;
  size: number;
  type: string;
}

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-stock-inventory></app-stock-inventory>
    </div>
  `
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }

}
