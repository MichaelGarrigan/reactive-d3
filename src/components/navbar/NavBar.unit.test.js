
import React from 'react';
import ReactDOM from 'react-dom';
import { render, act, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NavBar from './NavBar.js';


afterEach(cleanup);

test('<NavBar /> will render', () => {
  const { container } = render(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar dimensions={{height: 1000, width: 600}} />
    </MemoryRouter>
  );
  const nav = container.querySelector('.navbar-wrapper');
  const elem = nav[Object.keys(nav)[0]];
  
  expect(elem.elementType).toBe('nav');
  expect(elem.pendingProps.className).toBe('navbar-wrapper');
  expect(elem.pendingProps.children.length).toBe(2);
});

test('<NavBar /> will render 4 anchor tags', () => {
  const {container, getAllByTestId} = render(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar dimensions={{height: 1000, width: 600}} />
    </MemoryRouter>
  );

  expect(getAllByTestId('link').length).toBe(4);
});

test('<NavBar /> when Examples is clicked it will dynamically change className', () => {
  const {container, getByTestId} = render(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar dimensions={{height: 1000, width: 600}} />
    </MemoryRouter>
  );

  const link = container.querySelector("[href='/examples']");
  
  expect(link.className).toBe('nav-examples-link');

  act( () => {
   fireEvent.click(link);
  });

  expect(link.className).toBe('nav-link-active');
  
});

test('<NavBar /> when Modules is clicked it will dynamically change className', () => {
  const {container, getByTestId} = render(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar dimensions={{height: 1000, width: 600}} />
    </MemoryRouter>
  );

  const link = container.querySelector("[href='/modules']");
  
  expect(link.className).toBe('nav-modules-link');

  act( () => {
   fireEvent.click(link);
  });

  expect(link.className).toBe('nav-link-active');
  
});

test('<NavBar /> when Resources is clicked it will dynamically change className', () => {
  const {container, getByTestId} = render(
    <MemoryRouter initialEntries={["/"]}>
      <NavBar dimensions={{height: 1000, width: 600}} />
    </MemoryRouter>
  );

  const link = container.querySelector("[href='/resources']");
  
  expect(link.className).toBe('nav-resources-link');

  act( () => {
   fireEvent.click(link);
  });

  expect(link.className).toBe('nav-link-active');
  
});