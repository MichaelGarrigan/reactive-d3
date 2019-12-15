
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Home from './Home.js';

let container;

beforeEach( () => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach( () => {
  document.body.removeChild(container);
  container = null;
});

it('<Home /> will render', () => {
  act( () => {
    ReactDOM.render(
      <MemoryRouter initialEntries={["/"]}>
        <Home dimensions={{height: 1000, width: 600}} />
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

it('<Home /> will render a SVG', () => {
  act( () => {
    ReactDOM.render(
      <MemoryRouter initialEntries={["/"]}>
        <Home dimensions={{height: 1000, width: 600}} />
      </MemoryRouter>
      , container
    );
  });
  const svg = container.querySelector('.home-svg');
  const elem = svg[Object.keys(svg)[0]];

  expect(elem.elementType).toBe('svg');
  expect(elem.pendingProps.className).toBe('home-svg');
});