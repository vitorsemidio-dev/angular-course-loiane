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
    'https://getbootstrap.com/docs/3.3/components/#panels',
  ];
  title = 'Curso Angular';
}
