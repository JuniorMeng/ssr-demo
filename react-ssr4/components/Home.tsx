import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  const log = useCallback(() => {
    console.log('Hello world');
  }, []);

  const toLogin = () => {
    navigate('/login');
  }
  return (
    <div>
      <div>This is Home</div>
      <button onClick={log}>Click me</button>
      <div onClick={toLogin}>to login</div>
    </div>
  )
}
export default Home