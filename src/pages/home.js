import React from 'react';
import './home.css'
import Dashboard from '../components/dashboard';

function Home() {
  return (
    <div className='home'>
      <p>this is the home page</p>
      <Dashboard />
    </div>
  );
}

export default Home;
