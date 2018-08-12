import React, { Component, Fragment } from 'react';
import uuid from 'uuid/v4';



export default class NoteCreateForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      editing: false,
      completed: false,
      content: "",
      title: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.onSubmit({ ...this.state, id: uuid() });
    this.setState({
      title: '',
      content: '',
    })
  };

  onChange(event){
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
    return (
      <Fragment>
        <form onSubmit={this.onSubmit} onChange={this.onChange}>
          <input name="title" placeholder="title" value={this.state.title} />
          <textarea name="content" placeholder="content" value={this.state.content} />
          <label>
            <span>editing</span>
            <input name="editing" type="checkbox" />
          </label>
          <label>
            <span>completed</span>
            <input name="completed" type="checkbox" />
          </label>
          <button type='submit'>Create Note</button>
        </form>
      </Fragment>
    );
  }
}
