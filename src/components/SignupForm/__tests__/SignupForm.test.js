import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import SignupForm from '../SignupForm';

it('SignupForm renders witout crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><SignupForm /></BrowserRouter>, div);
});