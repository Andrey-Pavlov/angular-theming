import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scss-themes',
  templateUrl: './scss-themes.component.html',
  styleUrls: ['./scss-themes.component.scss']
})
export class ScssThemesComponent implements OnInit {

  selectedTheme: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  setLight() {
    this.selectedTheme = 'theme-light';
  }

  setDark() {
    this.selectedTheme = 'theme-dark';
  }
}
