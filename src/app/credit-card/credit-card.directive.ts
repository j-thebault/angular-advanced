import {Directive, HostListener, HostBinding, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  // @HostBinding is biding a variable to an attribute of the host, much like a [propA]="value" inside the component tag
  @HostBinding('style.border')
  border: string;

  // host listener is just an event listener
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    // now we make packets of 4 characters
    const numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    // injecting a space beetween each packet of 4 chars
    input.value = numbers.join(' ');

    this.border = '';
    if (/[^\d]+/.test(trimmed)) {
      this.border = '1px solid red';
    }
  }

  // injecting the element that is bound to the directive
  constructor(private element: ElementRef) {

    console.log(this.element);
  }
}
