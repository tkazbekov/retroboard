import { defineStore } from "pinia";

export interface Note {
  id: number;
  text: string;
  columnId: number;
}

interface NoteState {
  items: Record<string, Note>;
}

export const useNoteStore = defineStore({
  id: "notes",

  state: (): NoteState => ({
    items: {},
  }),
});
