import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScssThemesComponent } from './scss-themes/scss-themes.component';
import { CssVarComponent } from './css-var/css-var.component';

@NgModule({
  declarations: [
    AppComponent,
    ScssThemesComponent,
    CssVarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
