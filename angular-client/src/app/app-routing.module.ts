import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'credits', component: SecondPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
