import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import SignupPage from '../SignupPage';

it('SignupPagerenders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><SignupPage /></BrowserRouter>, div);
});