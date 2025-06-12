import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../components/Home';
import Login from '../components/Login'

export default ({ store }: any) => {
    return (
  <Routes>
    <Route path='/' element={<Home store={store} />}></Route>
    <Route path='/login'  element={<Login store={store} />}></Route>
  </Routes>
)
}