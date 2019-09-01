import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  referencias = [
    'https://ember-cli.com/',
    'https://valor-software.com/ngx-bootstrap/#/tabs',
  ];
  title = 'Curso Angular';
}
