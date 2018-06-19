import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  static defaultProps = {
    date: new Date()
  };
  /*
  state = {
    date: this.
  };
*/
  constructor(props) {
    super(props);
    let dateIni = this.props.horaIni ? this.props.horaIni : Date.now();
    this.state = {
      date: new Date(dateIni)
    };
  }

  incrementarFecha() {
    let currentDate = this.state.date;
    currentDate.setSeconds(currentDate.getSeconds() + 1);
    this.setState({ date: currentDate });
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.incrementarFecha();
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
