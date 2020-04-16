import React from 'react';
import Comment from './Comment';

const user ={
  name: 'Tom',
  avatarUrl: 'https://avatars3.githubusercontent.com/u10001'
}

const App = () => {
  return(
    <Comment
    author={user}
    text="Good job"
    date={new Date()}
  />
  )
};

export default App;