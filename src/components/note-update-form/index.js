import React, {Component, Fragment} from 'react';

import './note-update-form.scss';

export default class NoteUpdateForm extends Component {

  render() {
    const {show} = this.props;
    let handleFormDisplay = show ? 'display-block' : 'display-none';

    return (
      <form className={handleFormDisplay}>
        <input 
          type='text'
          placeholder='title'
          // onChange={handleTitleChange}
        />
        <textarea 
          type='text'
          cols='20'
          rows='20'
          placeholder='note'
          // onChange={handleContentChange}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}