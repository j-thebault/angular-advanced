import {Component} from '@angular/core';

@Component({
  selector: 'app-mail-app',
  styleUrls: ['mail-app.component.scss'],
  template: `
    <div class="mail">
      <router-outlet
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)"
      ></router-outlet>
    </div>
      <router-outlet name="pane"
      ></router-outlet>
  `
})
export class MailAppComponent {
  onActivate(event) {
    console.log('Activate ', event);
  }

  onDeactivate(event) {
    console.log('Deactivate ', event);
  }
}
