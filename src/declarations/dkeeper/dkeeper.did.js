export const idlFactory = ({ IDL }) => {
  const List = IDL.Rec();
  const Note = IDL.Record({ 'title' : IDL.Text, 'content' : IDL.Text });
  List.fill(IDL.Opt(IDL.Tuple(Note, List)));
  return IDL.Service({
    'createNote' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
    'deleteNoteAtIndex' : IDL.Func([IDL.Nat], [], ['oneway']),
    'printNotes' : IDL.Func([], [List], ['query']),
    'readNotes' : IDL.Func([], [IDL.Vec(Note)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
