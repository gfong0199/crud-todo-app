import React, { useState, useEffect } from 'react';
import firebase from '../util/firebase';
import Todo from './Todo';

export default function TodoList() {
  const [todoList, setTodoList] = useState();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');


  useEffect(() => {
    const todoRef = firebase.database().ref('mesages');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);

  return (
    <div>
      {todoList
        ? todoList.map((todo, index) => <Todo todo={todo} key={index} />)
        : ''}
    </div>


  );
}
