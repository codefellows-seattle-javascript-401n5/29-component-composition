import React from "react";

import NoteUpdateForm from '../note-update-form/note-update-form.js'

export default class NoteItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'default'
    }
    this.editMode = this.editMode.bind(this);
    this.defaultMode = this.defaultMode.bind(this);
  }

  editMode() {
    this.setState({ mode: 'edit' });
  }

  defaultMode() {
    this.setState({ mode: 'default' })
  }

  render() {

    if (this.state.mode === 'default') {
      return (
        <li onDoubleClick={this.editMode}>
          <h2>{this.props.note.title}</h2>
          <button onClick={() => props.onRemove(this.props.note.id)}>delete</button>
          <p>{this.props.note.content}</p>
        </li>
      );
    } else {
      return (
        <NoteUpdateForm note={this.props.note} 
          note={this.props.note}
          onUpdate={this.props.onUpdate}
          onCancel={this.defaultMode}
          onDone={this.defaultMode}
        />);
    }
  }
}