import React from "react";


function calc(date) {
  return Math.floor(((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)))
};
  
const Greeting = (props) => {
  return(
    <div className="greeting">
    {`My name is ${props.firstName} ${props.lastName}. I'm ${calc(props.birthDate)} years old`}
</div>
  );
};


export default Greeting;