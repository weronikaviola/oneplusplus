import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import InfoPage from '../components/InfoPage/InfoPage';
import TestOne from '../components/TestOne/TestOne';
import TestTwo from '../components/TestTwo/TestTwo'
import TestThree from '../components/TestThree/TestThree';
import TestPage from '../TestPage';


it('TestPage renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><TestPage /></BrowserRouter>, div);
});
it('InfoPage renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><InfoPage /></BrowserRouter>, div);
});
it('TestOne renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><TestOne /></BrowserRouter>, div);
});
it('TestTwo renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><TestTwo /></BrowserRouter>, div);
});
it('TestThree renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><TestThree /></BrowserRouter>, div);
});