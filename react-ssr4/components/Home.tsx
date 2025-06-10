import React, { useCallback } from 'react';
const Home = ({ store }: any) => {
  const { isLoggedIn, username, logout } = store();
  const log = useCallback(() => {
    console.log('Hello world');
  }, []);
  return (
    <div>
      <div>This is Home</div>
      <button onClick={log}>Click me</button>
    </div>
  )
}
export default Home