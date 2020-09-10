import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
  <h4>{{name}}</h4>
  `,

  styles: [`h1{background: chartreuse}`]
})
export class AppComponent {
  title = 'Angular';
  name = 'serj';
}
