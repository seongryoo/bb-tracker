import { Component, OnInit } from '@angular/core';
import { ScoreService } from '@modules/tracker/services/score/score.service';
import { TimelineService } from '@modules/tracker/services/timeline/timeline.service';
import { Score } from '@model/score';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  private scaling: number = 1;
  private viewWidth: number = 500;
  private trackHeight: number = 100;
  trackerScore: Score;

  getScore(): void {
    this.scoreService.getScore()
      .subscribe(score => this.trackerScore = score);
  }

  constructor(private scoreService: ScoreService, 
              private tl: TimelineService) { }

  ngOnInit(): void {
    this.getScore();
    this.tl.reportWidth(this.viewWidth);
    this.tl.setScaling(this.scaling);
    this.tl.setTrackHeight(this.trackHeight);
  }

}
