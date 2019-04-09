import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import About from '../About';

it('About Page renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><About /></BrowserRouter>, div)
});