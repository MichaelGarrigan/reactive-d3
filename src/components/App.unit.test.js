
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import App from './App.js';

let container;

beforeEach( () => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach( () => {
  document.body.removeChild(container);
  container = null;
});

it('<App /> will render', () => {
  act( () => {
    ReactDOM.render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
      , container
    );
  });
  const global = container.querySelector('.global-container');
  const elem = global[Object.keys(global)[0]];
  
  expect(elem.elementType).toBe('div');
  expect(elem.pendingProps.className).toBe('global-container');
  expect(elem.pendingProps.children.length).toBe(6);
});

it('<App /> will render a navbar', () => {
  act( () => {
    ReactDOM.render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
      , container
    );
  });
  const nav = container.querySelector('.navbar-wrapper');
  const elem = nav[Object.keys(nav)[0]];

  expect(elem.elementType).toBe('nav');
  expect(elem.pendingProps.className).toBe('navbar-wrapper');
  expect(elem.pendingProps.children.length).toBe(2);
});

it('<App /> will render a home element on initial load', () => {
  act( () => {
    ReactDOM.render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
      , container
    );
  });
  const home = container.querySelector('.home-wrapper');
  const elem = home[Object.keys(home)[0]];
  
  expect(elem.elementType).toBe('div');
  expect(elem.pendingProps.className).toBe('home-wrapper');
  expect(elem.pendingProps.children.length).toBe(2);
});
