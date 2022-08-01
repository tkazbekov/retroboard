import type { Column } from "./Column";

export interface Board {
    _id: string;
    title: string;
    columns: Column[];
  }