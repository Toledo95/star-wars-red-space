import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
const charactersList = ['Yoda', 'Darth Vader', 'Luke Skywalker', 'Leia', 'Han Solo', 'Boba Fett'];

test('renders Star Wars', () => {
  render(<App />);
  const linkElementStart = screen.getByText(/star/i);
  const linkElementWars = screen.getByText(/wars/i);
  expect(linkElementStart).toBeInTheDocument();
  expect(linkElementWars).toBeInTheDocument();
});


test('renders Characters', () => {
  render(<App />);
  charactersList.map((e) => {
    const linkElement = screen.getByText(e);
    expect(linkElement).toBeInTheDocument();
  })
  
});
