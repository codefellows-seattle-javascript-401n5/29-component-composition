import React from 'react';
export default class NoteCreateForm extends React.Component {

  render() {
    return (
      <form className='note_input_form' onSubmit={this.props.handleSubmit}>
        <div className='input_area'>
          <input
            type='text'
            placeholder='title'
            onChange={this.props.handleTitleChange}
          />
          <textarea
            type='text'
            cols='20'
            rows='20'
            placeholder='note'
            onChange={this.props.handleContentChange}
          />
          <button type='submit'>Make Some Music!</button>
        </div>
      </form>
    );
  }
}