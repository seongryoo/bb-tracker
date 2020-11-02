import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Score } from '@model/score';

import { score } from '@modules/tracker/mock/mock-score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  getScore(): Observable<Score> {
    return of(score);
  }

  constructor() { }
}
