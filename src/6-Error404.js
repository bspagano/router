import React from 'react'
import {Route, Link, Routes, Navigate} from "react-router-dom"

  const  Portafolio = () => {
    const loggedIn = false

     if (!loggedIn) {
       return <Navigate to="/" replace/> 
     }
     return (
       <h1>Portafolio</h1>
     )
  }
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
        <Route path ="*" elemen={
             <React.Fragment>
            404: ruta no encontrada
           </React.Fragment>
        }>
        <Route path="/portafolio" element={
          <React.Fragment>
            <Portafolio/>
          </React.Fragment>
        }>tr
        </Route>
      </Routes>
     </section>
    </div>
  )
}

export default App