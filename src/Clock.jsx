import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  static defaultProps = {
    date: new Date()
  };

  state = {
    date: new Date()
  };

  constructor() {
    super();
    console.log('construcrooooorrrrr');
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
    console.log('se monto el componente en el dom');
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('componente desmontado');
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
