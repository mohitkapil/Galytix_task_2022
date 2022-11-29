import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherWizardComponent } from './weather-wizard/weather-wizard.component';
import { CountryTableComponent } from './country-table/country-table.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AppComponent, WeatherWizardComponent, CountryTableComponent],
  imports: [BrowserModule, AppRoutingModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
