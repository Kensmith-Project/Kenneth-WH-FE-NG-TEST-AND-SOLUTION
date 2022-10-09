/**
 * In the following React template, display an unordered list (UL) with list items (LI) within it. 
 * The content of each list item should contain two spans (SPAN), one with the name and the other with the age passed in to the DataList function. 
 * The span elements should be separated by a single space.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';


interface PersonProps{
  person:{name:string, age: number}[]
}
function DataList(props: PersonProps) {

  
  return (
   <div>
    <ul>
   {props.person.map((ele)=>(<li>
      <span>{ele.name}</span> {" "} <span>{ele.age}</span>
       </li>))}</ul>
   </div>
  );
}

const data = [
  { name: 'Daniel', age: 25 },
  { name: 'John', age: 24 },
  { name: 'Jen', age: 31 },
];


ReactDOM.render(
  <DataList person={data} />,
  document.getElementById('test-01')
);