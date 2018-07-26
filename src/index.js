import React from 'react';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';
import './style.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div className="header" style={{textAlign: 'center'}}>
      <h1><Typist>Write Something and hit submit!</Typist></h1>
        <form onSubmit={this.handleSubmit}>
        <input className="search-box" value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h1 className="message">{this.state.submit}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Form/>, document.getElementById('app'));
