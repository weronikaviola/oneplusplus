import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import NavBar from '../../NavBar/NavBar';


it('NavBar renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><NavBar /></BrowserRouter>, div);
});

it('Header renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Header /></BrowserRouter>, div);
});