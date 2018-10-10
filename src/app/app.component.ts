import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {User} from './auth-form/auth-form.interface';
import {AuthFormComponent} from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <app-example-one></app-example-one>
      <app-example-two></app-example-two>
      <app-example-three></app-example-three>
    </div>
  `
})
export class AppComponent implements AfterContentInit, AfterViewInit {

  title = 'app';

  rememberMe: boolean;


  constructor() {

  }

  handleRegistration($event: User) {
    console.log('Register', $event);
  }

  handleLogin($event: User) {
    console.log('Login', $event, this.rememberMe);
  }

  handleRememberMe($event: boolean) {
    this.rememberMe = $event;
  }

  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {
  }


}
