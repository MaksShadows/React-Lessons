const element = React.createElement(
  'div', 
  { className: 'greeting' },
   [
      React.createElement(
          'div', { className: 'greeting__title' },
          'Hello, world!'
      ),
      React.createElement(
          'div', { className: 'greeting__text' },
          'I\'m learning React'
      ),
  ]
);

const rootElem = document.querySelector('#root');
ReactDOM.render(element, rootElem)