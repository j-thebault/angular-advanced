import {Component, forwardRef, InjectionToken, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

// here we are defining a DI Token
// we declare COUNTER_CONTROL_ACCESSOR , that provide NG_VALUE_ACCESSOR witch is of type
//  InjectionToken<ControlValueAccessor> ie like an interface in spring ?
// useExisting means that we use an existing class implementing ControlValueAccessor.
// forwardRef allow us tio reference a class not yet declared and/or not available for DI container (same thing as @Lazy in spring ?)
// multi ??? myabe it's something like Spring's scope, ie here it's something like a scope.PROTOTYPE ?
const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true
};

@Component({
  selector: 'app-stock-counter',
  providers: [
    COUNTER_CONTROL_ACCESSOR
  ]
  ,
  template: `
    <div class="stock-counter">
      <div>
        <div
          tabindex="0"
          (keydown)="onKeyDown($event)"
          (blur)="onBlur($event)"
          (focus)="onFocus($event)"
          [class.focused]="focus"
        >
          <p>{{value}}</p>
          <div>
            <button type="button" (click)="increment()" [disabled]="value === max">+</button>
            <button type="button" (click)="decrement()" [disabled]="value === min">-</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./stock-counter.component.scss']
})
export class StockCounterComponent implements OnInit, ControlValueAccessor {

  private onTouch: Function;
  private onModelChange: Function;

  @Input() step = 10;
  @Input() min = 10;
  @Input() max = 1000;

  value = 10;

  focus: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  increment() {
    let newValue = this.value + this.step;
    if (newValue > this.max) {
      newValue = this.max;
    }
    this.value = newValue;
    this.onTouch();
    this.onModelChange(this.value);
  }

  decrement() {
    let newValue = this.value - this.step;
    if (newValue < this.min) {
      newValue = this.min;
    }
    this.value = newValue;
    this.onTouch();
    this.onModelChange(this.value);
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  // will allow us to call the interval touched function directly from our code.
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // To deactivate the whole control by using Angular reactive form API
  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    console.log(obj);
    this.value = obj || 0;
  }

  onKeyDown(event: KeyboardEvent) {
    // Arrays of handlers with keyboard code as key
    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    };

    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }

    this.onTouch();
  }

  onBlur(event) {
    console.log('blur');
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  onFocus(event) {
    console.log('focus');
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }
}
