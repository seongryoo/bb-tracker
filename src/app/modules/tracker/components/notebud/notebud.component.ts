import { Component, OnInit, Input } from '@angular/core';
import { Note } from '@model/note';
import { TimelineService } from '@modules/tracker/services/timeline/timeline.service';

@Component({
  selector: 'app-notebud',
  templateUrl: './notebud.component.html',
  styleUrls: ['./notebud.component.css']
})
export class NotebudComponent implements OnInit {
  @Input() note: Note;

  constructor(private tl: TimelineService) { }

  getLeft(): string {
    const scaling = this.tl.getScaling();
    const startTime = this.note.startTime;
    return (startTime * scaling) + "px";
  }

  getTop(): string {
    const trackHeight = this.tl.getTrackHeight();
    const num = this.note.trackId;
    return (trackHeight * num) + "px";
  }

  getWidth(): string {
    const scaling = this.tl.getScaling();
    const duration = this.note.duration;
    return (duration * scaling) + "px";
  }

  getHeight(): string {
    const trackHeight = this.tl.getTrackHeight();
    return trackHeight + "px";
  }

  ngOnInit(): void {
  }

}
