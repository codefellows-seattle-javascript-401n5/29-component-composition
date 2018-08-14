import React, { Component, Fragment } from 'react';
import NoteUpdateForm from '../note-update-form';

export default class NoteItem extends Component {
 
  render() {
    const {note, handleUpdateNote, handleRemoveNote, onComplete, handleContentChange, handleTitleChange} = this.props;

    let showEditingForm = () => handleUpdateNote({...note, editing: true});
    let hideEditingForm = () => handleUpdateNote({...note, editing: false});

    return (
      <Fragment>
        <h3 onDoubleClick={showEditingForm}>{note.title}</h3>
        <p>{note.content}</p>
        <button id={note.id} onClick={handleRemoveNote}>Delete</button>
        <button id={note.id} onClick={showEditingForm}>Update</button>
        <NoteUpdateForm
          show={note.editing}
          onComplete={onComplete}
          handleContentChange={handleContentChange}
          handleTitleChange={handleTitleChange}
          hideEditingForm={hideEditingForm}
        />
      </Fragment>
    );
  }
}