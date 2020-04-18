import React, { Component } from 'react';
import Online from './Online'
import Offline from './Offline'

const Status = ({isOnline }) =>{
  return(
    <div>
      {isOnline ? <Online/> : <Offline/>}
    </div>
  );
} ;


export default Status;
