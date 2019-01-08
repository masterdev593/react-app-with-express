import React from 'react';
import { Link } from 'react-router-dom';

const ProgramaPagina = () => {
  return (
    <div className='App'>
      <h1 className='App-header'>Inicio del Programa</h1>
      <h2>REACT 2019</h2>
      <ul style={{ listStyle: 'none' }}>
        <li className='App-link'><a href='/'>Inicio</a></li>
        <li className='App-link'>Nosotros</li>
        <li className='App-link'>
          <Link to={'/sucursales'}>Sucursales</Link>
        </li>
        <li className='App-link'>
          <Link to={'/programax'}>Ingreso/Registro</Link>
        </li>
      </ul>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur nesciunt possimus cum reprehenderit, explicabo sapiente laudantium veniam, facere recusandae autem maiores rem dicta. Consequatur doloremque nesciunt voluptas accusamus. Laboriosam, reiciendis!</p>
    </div>
  );
};

export default ProgramaPagina;
