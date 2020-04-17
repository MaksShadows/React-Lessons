import React from 'react';

const clickMe = () => 
    alert('Good job!');

const GoodButton = () => (
    <button className="fancy-button"
        onClick={clickMe}>
        Click me!
    </button>
);

export default GoodButton;