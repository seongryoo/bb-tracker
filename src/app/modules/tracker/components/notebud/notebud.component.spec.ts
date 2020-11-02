import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebudComponent } from './notebud.component';

describe('NotebudComponent', () => {
  let component: NotebudComponent;
  let fixture: ComponentFixture<NotebudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
