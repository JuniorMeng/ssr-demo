import React, { useCallback, useEffect } from 'react';

const Home = ({ store }: any) => {
  const { getUserInfo } = store();
  const { userInfo } = store.getState();
  console.log('Home userInfo', userInfo);

  const log = useCallback(() => {
    console.log('Hello world 22222');
  }, []);

  // useEffect(() => {
  //   getUserInfo()
  // }, []);

//  async function _getUserInfo() {
//    return await store.getState().getUserInfo()
//  }

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

Home.loadData = (store: any) => {
  return store.getState().getUserInfo()
  // const { getUserInfo } = store();
  // return getUserInfo
}

export default Home