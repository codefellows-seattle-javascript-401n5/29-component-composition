import React, { Component, Fragment } from 'react';
import NoteItem from '../note-item';

export default class NoteList extends Component {
  render() {
    const {notes, removeNote, updateNote} = this.props;  // so dont have to do "this.props"
    
    return(
      <Fragment>
        <ul>
          {
            notes.map(note => 
              <li key={note.id}>
                <NoteItem
                  note={note}
                  handleRemoveNote={removeNote}
                  handleUpdateNote={updateNote}
                />
              </li>
            )
          }
        </ul>
      </Fragment>
    );
  }
}