import React, { useEffect, useState } from 'react';
import firebase from '../util/firebase';
import '../App.css';

export default function Todo({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref('mesages').child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref('mesages').child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });

  const getTicket = () => {
    const tickets = firebase.database().ref('mesages').child(todo.id);
    tickets.update();
  };


  };
  
  return (
    <div>
      <h1 className={todo.complete ? 'complete' : ''}>{todo.name}</h1>
      <h1>{todo.email}</h1>
      <h1>{todo.number}</h1>
      <h1>{todo.time}</h1>
      <h1>{todo.tviaje}</h1>
      <h1>{todo.date}</h1>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={completeTodo}>Complete</button>
    </div>
  );
}
