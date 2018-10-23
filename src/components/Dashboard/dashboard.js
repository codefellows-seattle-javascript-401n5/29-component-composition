import React, { Component, Fragment } from 'react';
import uuidv1 from 'uuid/v1';

import NoteCreateForm from '../Note-Create-Form/note-create-form.js';
import NoteList from '../Note-List/note-list.js';

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
    this.updateNote = this.updateNote.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  addNote(note) {
    note.id = uuidv1(),
      note.editing = false,
      note.completed = false,
      note.title = this.state.title,
      note.content = this.state.content,

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

  removeNote(event) {
    let filteredNotes = this.state.notes.filter(note => {
      if (event.target.id !== note.id) {
        return note;
      }
    });
    this.setState({
      notes: filteredNotes,
    });
  }

  updateNote(event) {
    let updatedNotes = this.state.notes.map(note => {
      if (event.id === note.id) {
        return event;
      }
      else {
        return note;
      }
    });
    this.setState({
      notes: updatedNotes,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('I am being submitted');
    this.addNote(this.state);
    this.setState({
      title: '', //clears form
      content: '',
    });
  }

  //rendering components
  render() {
    return (
      <Fragment>
        <h1>Dashboard</h1>
        <NoteCreateForm
          handleSubmit={this.handleSubmit}
          handleContentChange={this.handleContentChange}
          handleTitleChange={this.handleTitleChange} />
        <NoteList
          notes={this.state.notes}
          removeNote={this.removeNote}
          updateNote={this.updateNote} />
      </Fragment>
    );

  }
}
