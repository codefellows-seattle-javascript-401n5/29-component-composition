import React, {Component, Fragment} from 'react';

import '../../style/app.scss';

export default class NoteUpdateForm extends Component {
constructor(props) {
  super(props);

  this.state = {
    id: this.props.id,
    title: this.props.note.title,
    content: this.props.note.content,
    editing: this.props.note.editing,
    completed: this.props.note.completed,
  };

  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);
}

  onSubmit(event) {
    event.preventDefault();
    this.props.onUpdate({...this.state});
    this.setState({
      title: '',
      content: '',
    })
  };

  onChange(event) {
    const val =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
  };

  render() {
    return(
      <Fragment>
        <form onSubmit={this.onSubmit} onChange={this.onChange}>
          <input name="title" placeholder="Title" value={this.state.title}/>
          <input name="content" placeholder="Content" value={this.state.content}/>
          <label>
          <span>editing</span>
          <input name="editing" type="checkbox" />
        </label>
        <label>
          <span>completed</span>
          <input name="completed" type="checkbox" />
        </label>
          <button type='submit'>update</button>
          <button onClick={this.onCancel}>cancel</button>
        </form>
      </Fragment>
    );
  }
}