import { Note } from '@model/note';

export interface Score {
  notes: Note[];
  totalDuration: number;
}