import React, { useCallback } from 'react';
const Home = () => {
  const log = useCallback(() => {
    console.log('Hello world');
  }, []);
  return (
    <div>
      <div>This is Login</div>
      <button onClick={log}>Click me</button>
    </div>
  )
}
export default Home