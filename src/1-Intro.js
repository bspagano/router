import React from 'react'
import {Route, Link, Routes} from "react-router-dom"

  function App() {
  return (
    <div>
     <nav> 
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/portafolio">Portafolio</Link>
        </li>
      </ul>
     </nav>
     <section>
      <Routes>
        <Route path="/" element={
          <React.Fragment>
            <h1>Inicio</h1>
          </React.Fragment>
        } >
        </Route>
        <Route path="/portafolio" element={
          <React.Fragment>
           <h1>Portafolio</h1>
          </React.Fragment>
        }>tr
        </Route>
      </Routes>
     </section>
    </div>
  )
}

export default App
