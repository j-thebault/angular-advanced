import {AfterContentInit, Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import {User} from './auth-form/auth-form.interface';
import {AuthFormComponent} from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <div>
        <button (click)="handleDestroy($event)"> Destroy</button>
        <button (click)="handleMove($event)"> Move</button>
      </div>
      <div #entry>
      </div>
    </div>
  `
})
export class AppComponent implements AfterContentInit {
  title = 'app';

  @ViewChild('entry', {read: ViewContainerRef})
  entry: ViewContainerRef;

  rememberMe: boolean;

  private component: ComponentRef<AuthFormComponent>;

  // The ComponentFactoryResolver is able to give us a ComponentFactory for a given ts Type
  // Internally Angular probably maintain something like a Map<type,ComponentFactory>
  constructor(private resolver: ComponentFactoryResolver) {

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
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    this.entry.createComponent(authFormFactory);
    this.component = this.entry.createComponent(authFormFactory, 0);
    console.log(this.component.instance);
    this.component.instance.title = 'Create Account';
    this.component.instance.submitted.subscribe((user: User) => {
      this.handleLogin(user);
    });
  }

  handleDestroy($event) {
    this.component.destroy();
  }

  handleMove($event) {
    this.entry.move(this.component.hostView, 1);
  }
}
