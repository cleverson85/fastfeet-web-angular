import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  ngOnInit(): void {}

  getLocation(): Location {
    return this.location;
  }
}
