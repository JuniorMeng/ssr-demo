import React from 'react';
import {Routes, Route} from 'react-router-dom'
import routes from './routes'

export default ({ store }: any) => {
    return (
      <Routes>
        {
            routes.map(route => {
               const { path, element, key } = route;
                return <Route key={key} path={path} element={element({ store })} />;
            })
        }
      </Routes>
    )
}