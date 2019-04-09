import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MenuNoUser from '../MenuNoUser';

it('MenuNoUser renders propperly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><MenuNoUser /></BrowserRouter>, div);
});