import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScssThemesComponent } from './scss-themes/scss-themes.component';
import { AppComponent } from './app.component';
import { CssVarComponent } from './css-var/css-var.component';


const routes: Routes = [{
  path: 'sass-variables',
  component: ScssThemesComponent
}, {
  path: 'css-var',
  component: CssVarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
