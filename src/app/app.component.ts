import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';

interface File {
  name: string;
  size: number;
  type: string;
}

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div>
      <div *ngFor="let file of files">
        <p>{{file.name}}</p>
        <p>{{file.size | fileSize:'megabytes'}}</p>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {
  files: File[];

  ngOnInit() {
    this.files = [
      {name: 'logo.svg', size: 2120109, type: 'image/svg'},
      {name: 'banner.jpg', size: 18029, type: 'image/jpg'},
      {name: 'background.png', size: 1784562, type: 'image/png'}
    ];
  }
}
