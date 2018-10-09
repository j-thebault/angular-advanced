import {Component, Output, EventEmitter, AfterContentInit, ContentChildren, QueryList, AfterViewInit, ViewChild} from '@angular/core';
import {AuthRememberComponent} from './auth-remember.component';
import {User} from './auth-form.interface';
import {AuthMessageComponent} from './auth-message/auth-message.component';

@Component({
  selector: 'app-auth-form',
  template: `
    <div>
      <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <ng-content select="h3"></ng-content>
        <label>
          Email address
          <input type="email" name="email" ngModel>
        </label>
        <label>
          Password
          <input type="password" name="password" ngModel>
        </label>
        <ng-content select="app-auth-remember"></ng-content>
        <!-- (showMessage ? 'inherit' : 'none') is a tricks to avoid an ngIf that will remove the ViewChild from the dom,
         hence we hide it by using display attribute but the DOM node is rendered -->
        <app-auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></app-auth-message>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  @Output()
  submitted: EventEmitter<User> = new EventEmitter<User>();

  @ContentChildren(AuthRememberComponent)
  remember: QueryList<AuthRememberComponent>;

  @ViewChild(AuthMessageComponent)
  message: AuthMessageComponent;

  showMessage: boolean;

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit(): void {
    if (this.message) {
      this.message.days = 30;
    }
    if (this.remember) {
      this.remember.forEach(item => {
        console.log(item);
        item.checked.subscribe(
          (checked: boolean) => {
            this.showMessage = checked;
          }
        );
      });
    }
  }

  ngAfterViewInit(): void {
    console.log(this.message);
    // this.message.days = 30;
  }

}
