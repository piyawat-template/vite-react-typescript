import '../assets/scss/pages/home.scss'

import React, { useState } from 'react'

import Logo from '../assets/logo.svg'

function Home() {
  const [counter, setCounter] = useState(0)

  return (
    <section className="hero">
      <div className="container text-center">
        <img src={Logo} className="square-80" alt="react logo" />
        <h1 className="mb-8 text-2xl md:text-5xl">⚡Vite + React + Typescript 🤘</h1>
        <button className="button is-primary" onClick={() => setCounter(counter + 1)}>
          Click me : {counter}
        </button>
      </div>
    </section>
  )
}

export default Home
