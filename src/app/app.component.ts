import {Component} from '@angular/core';
import {User} from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  rememberMe: boolean;

  handleRegistration($event: User) {
    console.log('Register', $event);
  }

  handleLogin($event: User) {
    console.log('Login', $event, this.rememberMe);
  }

  handleRememberMe($event: boolean) {
    this.rememberMe = $event;
  }
}
