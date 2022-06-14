import React from 'react'
import {Route, NavLink, Routes, useMatch, } from "react-router-dom"

const Proyecto = () => {
  const match = useMatch('/portafolio/:proyecto_id')
  const {proyecto_id} = match.params

  return (
    <h2>Proyecto {match.params.proyecto_id} </h2>
  )
}
const Portafolio = () => {
  return (
    <div>
       <h1>Portafolio</h1>   
      <ul>
        <li>
          <NavLink  activeClassName="activado"  exact to={"/portafolio/proyecto-1"}>Proyecto 1 </NavLink>
        </li> 
        <li>
          <NavLink  activeStyle={{fontSize:20}} exact to={"/portafolio/proyecto-2"}>Proyecto 2 </NavLink>
        </li>   

      </ul>
      <div>
        <Routes>
          <Route
           path={":proyecto_id"}
           element={
             <>
               <Proyecto/> 
             </>
           }
          />
          
        </Routes>
      </div>
    </div>
  )
}
function App() {
  return (
    <div>
     <nav> 
       <ul>
        <li>
          <NavLink  exact to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink  exact to="/portafolio">Portafolio</NavLink>
        </li>
       </ul>
     </nav>
     <section>
      <Routes>
        <Route path="/" element={
            <React.Fragment>
              <h1>Inicio</h1>
            </React.Fragment> 
          }
        />
        <Route path="/portafolio/*" element={
          <React.Fragment>
            <Portafolio/>
          </React.Fragment>
        }>
          <Route path=":id" element={
            <React.Fragment>
              <div>
               hola
              </div>
            </React.Fragment>
          } />   
        </Route>
      </Routes>
     </section>
    </div>
  )
}

export default App
 