import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css'],
})
export class CountryTableComponent implements OnInit {
  CountryData: any;
  loading: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.getCountryData();
  }
  async getCountryData() {
    let response = await fetch('https://countriesnow.space/api/v0.1/countries');
    let data = await response.json();
    this.setCountryData(data.data);
  }
  setCountryData(data: any) {
    this.CountryData = [];
    data.map((item: any, index: any) => {
      let country_data = {
        id: index + 1,
        name: item.country,
        city: item.cities[0],
      };
      this.CountryData.push(country_data);
    });
    this.loading = false;
  }
}
