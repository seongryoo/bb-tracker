import { Note } from "@model/note";
import { Score } from "@model/score";

const mockNotes: Note[] = [
  { id: 0, trackId: 0, startTime: 100, duration: 500 },
  { id: 1, trackId: 2, startTime: 120, duration: 890 },
  { id: 2, trackId: 1, startTime: 110, duration: 120 },
  { id: 3, trackId: 0, startTime: 750, duration: 110 },
  { id: 4, trackId: 1, startTime: 300, duration: 200 },
];

export const score: Score = {
  notes: mockNotes,
  totalDuration: 15000,
}