import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import MainView from './views/MainView'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AppLayout />}>
            <Route path="/" element={<MainView/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
