import { Component } from '@angular/core';

/*
  Generated class for the ContentDrawer component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'content-drawer',
  templateUrl: 'content-drawer.html'
})
export class ContentDrawerComponent {

  text: string;

  constructor() {
    console.log('Hello ContentDrawer Component');
    this.text = 'Hello World';
  }

}
