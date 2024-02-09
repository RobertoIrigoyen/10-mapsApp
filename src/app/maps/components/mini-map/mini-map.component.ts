import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.scss']
})
export class MiniMapComponent implements AfterViewInit {
  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;


  ngAfterViewInit(): void {
    if (!this.lngLat) throw "No se ha encontrado LngLat";
    if (!this.divMap) throw 'El elemento no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom,// starting zoom
      interactive: false,
    });
    new Marker()
      .setLngLat(this.lngLat)
      .addTo(this.map);
  }
}
