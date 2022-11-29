import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherWizardComponent } from './weather-wizard/weather-wizard.component';
import { CountryTableComponent } from './country-table/country-table.component';

const routes: Routes = [
  { path: '', component: CountryTableComponent },
  { path: 'weather/details/:country/:city', component: WeatherWizardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
