import { Component } from '@angular/core';

import { City } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Dropdown List Lab';
  
  cities: City[] = [
    { 
      id: 1,
      name: "台北",
      district: ["大安區", "城中區", "信義區"]
    },
    { 
      id: 2,
      name: "台中",
      district: ["北屯區", "豐原區", "清水區"]
    },
    { 
      id: 3,
      name: "台南",
      district: ["學甲區", "白河區", "麻豆區"]
    }
  ];
  
  selectedCity: City = this.cities[1];
  districts: string[] = this.cities[1].district;

  onChange($event) {
      this.selectedCity = $event;
      this.districts = this.selectedCity.district;
  }

}
