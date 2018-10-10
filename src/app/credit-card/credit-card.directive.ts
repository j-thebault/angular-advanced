import {Directive, HostListener, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

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
  }

  // injecting the element that is bound to the directive
  constructor(private element: ElementRef) {

    console.log(this.element);
  }
}
