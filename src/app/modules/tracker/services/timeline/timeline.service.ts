import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private viewWidth: number;
  private scaling: number;
  private trackHeight: number;

  getScaling(): number {
    return this.scaling;
  }

  setScaling(scaling: number) {
    this.scaling = scaling;
  }

  getTrackHeight(): number {
    return this.trackHeight;
  }

  setTrackHeight(height: number) {
    this.trackHeight = height;
  }

  getWidth(): number {
    return this.viewWidth;
  }

  reportWidth(width: number) {
    this.viewWidth = width;
  }

  constructor() { }
}
