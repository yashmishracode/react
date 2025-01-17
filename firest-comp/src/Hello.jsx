import React from 'react';

function Hello() {
  let myName = 'Yash Mishra';
  let number = Math.random(); // Define the number variable
  return <p>My name is {myName} and random number {number}</p>;  // you can write any valid javascript expression inside curly braces
}

export default Hello;