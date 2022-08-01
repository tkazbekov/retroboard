import type { Note } from "@/models/Note";

export enum SORT_BY {
    VOTES_DESC = "Votes descending"
}

const votes_desc = (a: Note, b: Note) => (b.votes - a.votes)

export const sortByVotes = (array: Note[]) => array.sort(votes_desc);