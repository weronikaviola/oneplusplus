import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Creators from '../Creators';

it('Creators Page renders without Crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><Creators /></BrowserRouter>, div);
});