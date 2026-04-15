// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
    <h6  class="text-3xl font-bold underline ">start tailwind setupp</h6>
    <button class="flex-10 flx-40">click me</button>
    <div>
      <header className="header">
        <h1>My React Website</h1>
        <p>Simple and clean design</p>
      </header>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </nav>

      <div className="container">
        <h2>Image Gallery</h2>

        <div className="imageGrid">
          <img src="https://via.placeholder.com/300" alt="img1" />
          <img src="https://via.placeholder.com/300" alt="img2" />
          <img src="https://via.placeholder.com/300" alt="img3" />
          <img src="https://via.placeholder.com/300" alt="img4" />
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 My React App</p>
      </footer>
    </div>
    </>
  )
}

export default App
