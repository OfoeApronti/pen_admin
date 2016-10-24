import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import routes from './routes.js';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {loadClients} from './actions/clientActions';
import {loadEmployees} from './actions/employeeActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store=configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(loadClients());
store.dispatch(loadEmployees());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
