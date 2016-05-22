// Import the decorator class for Component
import { Component } from '@angular/core';
// Import the bootstrap method to load application component
import {bootstrap} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'my-app',
  template: `
<div class="container"> 
  <div class="page-header"> 
    <h2>Chapter 1 <small>Hello, World</small></h2> 
  </div> 
  <div class="jumbotron"> 
    <h1>Hello, {{name || 'World'}}</h1> 
    <input type="text" [(ngModel)]="name" class="form-control input-lg">
  </div> 
</div>
`})
export class AppComponent { 
	name: string = 'World';
}

