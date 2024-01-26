import { AfterViewInit, Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl as any).accessToken = 'pk.eyJ1Ijoicm9iYmluc2hhcnQiLCJhIjoiY2xyaHNoZHBiMDJnMzJrbzFhd3V5dnQ1MSJ9.bFL4Mypk-RDw_lA0nFGRmQ';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.scss']
})
export class FullScreenPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}
