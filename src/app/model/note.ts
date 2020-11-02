import { Signal } from '@model/signal';

export interface Note {
  id: number;
  startTime: number;
  duration: number;
  trackId: number;
  signal?: Signal;
}