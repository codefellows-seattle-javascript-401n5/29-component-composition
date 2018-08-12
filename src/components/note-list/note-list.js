import React from 'react';
import NoteItem from '../note-item/note-item.js';

export default props => (
  <ul>
    {props.notes.map(note => <NoteItem key={note.id} note={note}  onUpdate={props.onUpdate} />)}
  </ul>
);
