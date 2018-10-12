import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-view',
  template: `
    <div class="mail-view">
      Message
    </div>
  `,
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
