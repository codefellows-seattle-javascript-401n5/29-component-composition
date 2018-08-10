import React, { Component, Fragment } from 'react';
import uuidv1 from 'uuid/v1';

import NoteCreateForm from '../note-create-form';
import NoteList from '../note-list';
import NoteItem from '../note-item';
import NoteUpdateForm from '../note-update-form';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      content: '',
      title: '',
    };
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateNote = this.updateNote.bind(this);
  }

  addNote(note) {
    note.id = uuidv1(),
    note.editing = false,
    note.completed = false,
    note.title = this.state.title,
    note.content = this.state.content,

    console.log(note);

    this.setState({
      notes: [...this.state.notes, note],
    });
  }

  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  removeNote(e) {
    let filteredNotes = this.state.notes.filter(note => {
      if (e.target.id !== note.id) {
        return note;
      }
    });
    this.setState({
      notes: filteredNotes,
    });
  }

  updateNote(noteToUpdate) {
    let updatedNotes = this.state.notes.map(note => note.id === noteToUpdate.id ? noteToUpdate : note);

    this.setState({
      notes: updatedNotes,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addNote(this.state);
    this.setState({
      title: '',
      content: '',
    });
  }

  render() {
    console.log(this.state, 'state');
    return (
      <Fragment>
        <h1>Dashboard</h1>
        <NoteCreateForm
          onComplete={this.handleSubmit}
          handleContentChange={this.handleContentChange}
          handleTitleChange={this.handleTitleChange}
        />
        {/* {this.state.notes.length >0
        && <NoteList notes={this.state.notes} onRemove={this.removeNote}
        } */}
        <NoteList
          notes={this.state.notes}
          removeNote={this.removeNote}
          updateNote={this.updateNote}
        />

      </Fragment>
    );
  }
}