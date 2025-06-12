import React, { useCallback, useEffect } from 'react';
const Home = ({ store }: any) => {
  const { getUserInfo, userInfo } = store();
  const log = useCallback(() => {
    console.log('Hello world 22222');
  }, []);

  useEffect(() => {
     getUserInfo()
  }, []);
  return (
    <div>
      <div>This is Home222</div>
      <div>{userInfo.name}</div>
      <div>{userInfo.age}</div>
      <div>{userInfo.sex}</div>
      <button onClick={log}>Click me</button>
    </div>
  )
}
export default Home