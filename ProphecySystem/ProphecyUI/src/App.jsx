import { useState } from 'react'
import Homepage from './screen/pages/homepage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tournament from './screen/pages/tournament'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Navbar from './screen/components/navbar'
import Error404 from './screen/error/error404'
import "/res/font/futura/futur.ttf"
import Sample from './screen/pages/sample'

function App() {
  return (
    <Router>
          <Route path='/'>
                <Navbar/>
                <Homepage/>
          </Route>
          <Route path='/tournament'>
                <Navbar/>
                <Tournament/>
          </Route>
          <Route path='/sample'>
                <Navbar/>
                <Sample/>
          </Route>
          <Route path='*'>
            <Error404/>
          </Route>
    </Router>
  )
}

export default App
