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
      <ng-container
        [ngTemplateOutlet]="tmpl"
        [ngTemplateOutletContext]="ctx"
      ></ng-container>
      <ng-template #tmpl let-name let-location="location">{{name}} : {{location}}</ng-template>
    </div>
  `
})
export class AppComponent implements AfterContentInit, AfterViewInit {

  ctx = {
    $implicit: 'Julien',
    location: 'France FRA'
  };

  title = 'app';

  @ViewChild('entry', {read: ViewContainerRef})
  entry: ViewContainerRef;

  @ViewChild('tmpl')
  tmpl: TemplateRef<any>;

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

  }

  ngAfterViewInit(): void {
  }


}
