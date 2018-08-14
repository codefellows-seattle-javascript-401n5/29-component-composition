import React, {Component, Fragment} from 'react';

export default class NoteCreateForm extends Component {

  render() {
    const {onComplete, handleContentChange, handleTitleChange} = this.props;
    return (
      <form onSubmit={onComplete}>
        <input 
          type='text'
          placeholder='title'
          onChange={handleTitleChange}
        />
        <textarea 
          type='text'
          cols='20'
          rows='20'
          placeholder='note'
          onChange={handleContentChange}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}