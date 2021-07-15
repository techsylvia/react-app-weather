import React from 'react'
import './App.css'
import Weather from './Weather'
import Weatherform from './Weatherform'

export default function App() {
  return (
    <div className="App">
      <h1>Check the weather</h1>
      <Weatherform />
      <Weather defaultCity="Keflavik" />
      <div className="container">
        <footer>
          Coded by Sylvia
          <a
            href="
  https://github.com/sylviaantons/react-app-weather"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  )
}
