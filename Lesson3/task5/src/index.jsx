import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import './index.scss';



const rootElem = document.querySelector('#root');

const user = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
};

ReactDOM.render(<Profile userData={user} />, rootElem);