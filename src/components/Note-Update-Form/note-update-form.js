import React from 'react';

export default class NoteUpdateForm extends React.Component {


  render() {

    let handleChange = (event) => {
      let { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };

    let handleSubmit = (event) => {
      event.preventDefault();
      console.log('submitted update');

      this.props.handleComplete(this.state);
      this.setState({
        title: '',
        content: '',
      });
    };


    return (
      <form className='note_input_form' onSubmit={handleSubmit}>
        <div className='input_area'>
          <input
            type='text'
            name='title'
            placeholder={this.props.note.title}
            onChange={handleChange}
          />
          <input
            type='text'
            name='content'
            placeholder={this.props.note.content}
            onChange={handleChange}
          />
        </div>
        <button className='submit' type='submit'>UPDATE</button>
      </form>
    );
  }
}

