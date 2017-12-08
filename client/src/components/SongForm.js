import React from 'react';
import Chart from './Chart';

class SongForm extends React.Component {
  state=  { name: '' }

  handleSongChange = (e) => {
    this.setState ({name: e.target.value });
  }

  handleSongSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.name);
    this.setState({ name: '' })
  }

  render () {
    return(
      <form onSubmit={this.handleSongSubmit}>
        <input
          placeholder="Add a Song"
          required
          value={this.state.name}
          onChange={this.handleSongChange}
        />
      </form>
    )
  }
}

export default SongForm;
