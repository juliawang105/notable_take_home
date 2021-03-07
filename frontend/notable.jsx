import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { fetchAllPhysicians, fetchPhysicianAppts } from './actions/PhysicianApptActions'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.dispatch = store.dispatch;
  window.fetchAllPhysicians = fetchAllPhysicians;
  window.fetchPhysicianAppts = fetchPhysicianAppts
  ReactDOM.render(<Root store={store} />, root);
})