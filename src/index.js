import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Menu from  './components/Menu'
import ClientList from './components/ClientList'
import ClientInfo from './components/ClientInfo'
import EditClient from './components/EditClient'
import Activities from './components/Activities'
import Attendance from './components/Attendance' 




ReactDOM.render(
  <React.StrictMode>

        <Router>
          <Menu />
          <Switch>
            <Route path="/agregar-cliente" component={App} exact/>
            <Route path="/lista" component={ClientList}/>
            <Route path="/info/:id" component={ClientInfo}/>
            <Route path="/editar/:id" component={EditClient}/>
            <Route path="/actividades" component={Activities}/>
            <Route path="/" component={Attendance}/>
          </Switch>
        </Router>
 
  </React.StrictMode>,
  document.getElementById('root')
);

