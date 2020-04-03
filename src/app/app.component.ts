import { Component } from '@angular/core';
import { environment } from '../environments/environment';

const currentTheme = environment.theme;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [`./app.component.${currentTheme}.scss`, './app.component.scss']
})
export class AppComponent {
  title = 'angular-theming';
}

