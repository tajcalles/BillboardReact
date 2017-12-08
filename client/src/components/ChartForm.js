import React from 'react';
import { Input } from 'semantic-ui-react';

class ChartForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState ({name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addChart(this.state.name);
    this.setState({ name: '' })
  }

  render () {
    return(
      <form onSubmit={this.handleSubmit}>
        <Input focus
          placeholder="Add a Chart"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}


export default ChartForm;
