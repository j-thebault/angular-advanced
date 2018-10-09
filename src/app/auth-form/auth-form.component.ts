import {Component, Output, EventEmitter, ContentChild, AfterContentInit} from '@angular/core';
import {AuthRememberComponent} from './auth-remember.component';
import {User} from './auth-form.interface';

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
        <div *ngIf="showMessage">You will be logged for 30 days</div>
        <ng-content select="button"></ng-content>
      </form>
    </div>
  `
})
export class AuthFormComponent implements AfterContentInit {

  @Output()
  submitted: EventEmitter<User> = new EventEmitter<User>();

  @ContentChild(AuthRememberComponent)
  remember: AuthRememberComponent;

  showMessage: boolean;

  onSubmit(value: User) {
    this.submitted.emit(value);
  }

  ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        console.log(checked);
        this.showMessage = checked;
      });
    }
  }

}
