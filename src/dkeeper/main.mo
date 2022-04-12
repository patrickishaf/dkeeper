import List "mo:base/List";
import Debug "mo:base/debug";

actor DKeeper {

  public type Note = {
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  public query func printNotes(): async List.List<Note> {
    return notes;
  };

  public func createNote(title: Text, content: Text) {
    let note: Note = {
      title = title;
      content = content;
    };

    notes := List.push<Note>(note, notes);
    Debug.print(debug_show(notes));
  };

  public query func readNotes(): async [Note] {
    return List.toArray(notes);
  };

  public func deleteNote(id: Nat) {
    var takenNotes = List.take<Note>(notes, id);
    List.drop<Note>(notes, (id + 1));
    
    Debug.print(debug_show(notes));
  };
}