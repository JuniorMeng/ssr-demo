import React, { useCallback } from 'react';
const Home = ({ store }: any) => {
  const log = useCallback(() => {
    console.log('Hello world');
  }, []);
  return (
    <div>
      <div>This is Login 1111</div>
      <button onClick={log}>Click me</button>
    </div>
  )
}
export default Home