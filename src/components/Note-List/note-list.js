import React from 'react';

import NoteItem from '../Note-Item/note-item';


export default class NoteList extends React.Component {

  render() {
    return (
      <div>
        <ul>
          {
            this.props.notes.map((note) =>
              <li key={note.id}>
                <NoteItem
                  note={note}
                  handleRemoveNote={this.props.removeNote}
                  handleUpdateNote={this.props.updateNote}
                />

              </li>
            )
          }
        </ul>
      </div>
    );
  }
}