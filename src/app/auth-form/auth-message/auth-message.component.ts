import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-auth-message',
  template: `
    <p>
      You will be logged for {{days}} days
    </p>
  `
})
export class AuthMessageComponent implements OnInit {

  days = 7;

  constructor() {
  }

  ngOnInit() {
  }

}
