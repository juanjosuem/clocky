import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';

import './styles.css';

function tick() {
  ReactDOM.render(
    <section>
      <Clock
        title="Reloj mejorado sin lifecycles"
        horaIni="July 21, 1983 01:15:00"
      />
      <Clock title="otro relojito" horaIni="August 02, 2005 03:18:46" />
      <Clock title="y uno mas" />
    </section>,
    document.getElementById('root')
  );
}
tick();
//setInterval(tick, 1000);
