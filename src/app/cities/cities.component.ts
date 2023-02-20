import { Component } from '@angular/core';
import { City } from '../city';
import {CITIES} from '../mock-cities';
import { TempJson } from '../tempJson';
import {TempService} from '../temp.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent {
  cities = CITIES;
  temperatures: String = "";

  selectedCity?: City;
  
  ngOnInit(): void {
    
  }

  onSelect(city: City): void {
    this.selectedCity = city;
    this.getTemperatures(city.lat, city.lon);

  }

  getTemperatures(lat: Number, lon:Number): void {
    this.tempService.getTemperatures(lat, lon)
        .subscribe(temperatures => this.temperatures = temperatures);
  }

  constructor(private tempService: TempService) {
    
  }
}
