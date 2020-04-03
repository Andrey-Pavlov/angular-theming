import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// tslint:disable-next-line:no-empty-interface
interface ITheme {

}

@Component({
  selector: 'app-css-var',
  templateUrl: './css-var.component.html',
  styleUrls: ['./css-var.component.scss']
})
export class CssVarComponent implements OnInit {
  themeClass: string;
  themeObs: Observable<string>;

  constructor() {

  }

  ngOnInit(): void {

  }

  private setTheme(theme: ITheme) {
    // props from theme
    Object.keys(theme).forEach(k => document.documentElement.style.setProperty(`--${k}`, theme[k]));

    // set global class
    this.themeObs.subscribe((themeClass: string) => {
      this.themeClass = themeClass;
    });
  }

}
