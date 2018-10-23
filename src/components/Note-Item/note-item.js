import React, { Component } from 'react';
import NoteUpdateForm from '../Note-Update-Form/note-update-form.js';
import Modal from '../Modal/modal.js';

export default class NoteItem extends Component {

  render() {
    let showModal = () => {
      this.props.handleUpdateNote({ ...this.props.note, editing: true });
      console.log('updating');
    };
    let hideModal = () => {
      this.props.handleUpdateNote({ ...this.props.note, editing: false });
      console.log('updating');
    };
    let updateAndCloseModal = (note) => {
      this.props.handleUpdateNote({ ...this.props.note, editing: false });
      console.log('updating');
    };

    return (
      <div>

        <h3>{this.props.note.title}</h3>
        <p>{this.props.note.content}</p>
        <button id={this.props.note.id} onClick={this.props.handleRemoveNote}>Delete</button>
        <button onClick={showModal}>Edit</button>
        <NoteUpdateForm handleComplete={updateAndCloseModal} note={this.props.note} />
        <Modal handleClose={hideModal} show={this.props.note.editing} />

      </div >

    );
  }
}

