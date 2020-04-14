import React from 'react';
import ReactDOM from 'react-dom';

const rootElem = document.querySelector('#root');

const element = (
  <>
  <h1>Search Form</h1>
  <div>
  <input type="text" />
<button>Submit</button>
  </div>
  </>
);


ReactDOM.render(element, rootElem);