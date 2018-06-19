import React from "react";
import ReactDOM from "react-dom";
import Clock from './Clock'

import "./styles.css";



function tick() {
  ReactDOM.render(<Clock title="Reloj mejorado sin lifecycles" />, document.getElementById('root'));
}
tick();
//setInterval(tick, 1000);
