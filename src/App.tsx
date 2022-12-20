import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'
import { AppRoutes } from './AppRoutes';

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
