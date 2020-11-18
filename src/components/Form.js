import React, { useEffect, useState } from 'react';
import firebase from '../util/firebase';

export default function Form() {
  const [tpticket, settpticket] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [tviaje, setTviaje] = useState('');
  const [time, setTime] = useState('');

  const createTodo = () => {
    const todoRef = firebase.database().ref('mesages');
    const todo = {
      tpticket,
      name,
      email,
      date,
      number,
      tviaje,
      time,
      complete: false,
    };

    todoRef.push(todo);
  };
  return (
    <div><form>
      <label>Tipo de Ticket </label>
      <select type="text" onChange={e => settpticket(e.target.value)} value={tpticket}>
      <option selected>Selecione la categoria</option>
      <option>Reserva</option>
                        <option>Cotizacion</option>
        </select><br/>
      <label>Email </label>
      <input type="email"  onChange={e => setEmail(e.target.value)}value={email} /><br/>
      <label>Nombre </label>
      <input type="text"  onChange={e => setName(e.target.value)} value={name}/><br/>
      <label>date </label>
      <input type="date"  onChange={e => setDate(e.target.value)} value={date}/><br/>
      <label>number </label>
      <input type="text"  onChange={e => setNumber(e.target.value)} value={number}/><br/>
      <label>Tipo de viaje </label>
      <select type="text"  onChange={e => setTviaje(e.target.value)} value={tviaje}><br/>
      <option>Selecione su tipo de viaje </option>
                        <option>Translado de aeropuerto hotel de playas</option>
                        <option>Translado de aeropuerto hotel de ciudad</option>
                        <option>Giras</option>
                        <option>City Tours</option>
                        <option>Transporte para colaboradores</option>
                      </select>
      <label>Hora </label>
      <input type="time"  onChange={e => setTime(e.target.value)} value={time}/><br/>
      
      <button onClick={createTodo}>Add Todo</button>
      </form>
    </div>
  );
}
