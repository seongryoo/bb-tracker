import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Note } from '@model/note';
import { TimelineService } from '@modules/tracker/services/timeline/timeline.service';

@Component({
  selector: 'app-notebud',
  templateUrl: './notebud.component.html',
  styleUrls: ['./notebud.component.css']
})
export class NotebudComponent implements OnInit {
  @Input() note: Note;
  private isUnderMouseControl: boolean = false;
  private mouseStartX: number;
  private mouseStartY: number;
  private durationOnMouseStart: number;

  constructor(private tl: TimelineService) { }

  // Calculating coordinates for drawing

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

  handleSizeControl(e): void {
    console.log("Size has been controlled");
    this.isUnderMouseControl = true;
    this.mouseStartX = e.clientX;
    this.mouseStartY = e.clientY;
    this.durationOnMouseStart = this.note.duration;
    console.log("Starting at (" + this.mouseStartX + ", " + this.mouseStartY + ")");
    this.onMouseMove(e);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e): void {
    if (this.isUnderMouseControl) {
      console.log("(" + e.clientX + ", " + e.clientY + ")");
      const mouseMoved: number = e.clientX - this.mouseStartX;
      const pixelToDuration: number = mouseMoved / this.tl.getScaling();
      const newDuration: number = this.durationOnMouseStart + pixelToDuration;
      if (newDuration > 0) {
        this.note.duration = newDuration;
      }
    }
  }

  handleControlEnd(e): void {
    this.isUnderMouseControl = false;
    console.log("Ended with event:");
    console.log(e);
  }

  @HostListener('document:mouseleave', ['$event'])
  onMouseExit(e): void {
    this.handleControlEnd(e);
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e): void {
    this.handleControlEnd(e);
  }

  // Handling clicks
  @HostListener('mousedown', ['$event'])
  onMouseDown(e): void {
    if (e.target.classList.contains('size-control')) {
      this.handleSizeControl(e);
    }
    console.log("I have been clicked.");
    console.log(e);
  }

  ngOnInit(): void {
  }

}
