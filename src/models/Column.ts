import type { Note } from "./Note";

export interface Column {
    id: string
    title: string;
    notes: Note[];
  }