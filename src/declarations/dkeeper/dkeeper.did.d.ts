import type { Principal } from '@dfinity/principal';
export type List = [] | [[Note, List]];
export interface Note { 'title' : string, 'content' : string }
export interface _SERVICE {
  'createNote' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'deleteNoteAtIndex' : (arg_0: bigint) => Promise<undefined>,
  'printNotes' : () => Promise<List>,
  'readNotes' : () => Promise<Array<Note>>,
}
