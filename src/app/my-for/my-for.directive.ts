import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyFor][appMyForOff]'

})
export class MyForDirective {

  @Input()
  set appMyForOff(collection) {
    this.viewContainerRef.clear();
    console.log(collection);
    collection.forEach((item, index) => {
      console.log(index, item);
      this.viewContainerRef.createEmbeddedView(this.templateRef, {$implicit: item, index});
    });
  }

  // view container ref
  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {
  }


}
