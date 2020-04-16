import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss';
import SearchField from './Search.jsx';

const rootElem = document.querySelector('#root');

ReactDOM.render(<SearchField name="Tom" />, rootElem);