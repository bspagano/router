import React from 'react'
import {Route, Link, Routes, useHistory} from "react-router-dom"

const App = () => {
   const history = useHistory()
   console.log({history})
   const forward = () => {
     history.goForward()
   }
   const back = () => {
     history.goBack()
   }
   const push = (url) => {
     history.push(url)
   }
  return (
    <div>
      <h1>Portafdasdadolio</h1>   
      <Link to={"/portafolio/proyecto-1"}>Proyecto 1 </Link>
      <ul>
        <li>
        </li>   
      </ul>
    </div> 
  )
}

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
       <button onClick={back}> Back </button>
       <button onClick={forward}>Forward </button>
       <button onClick={()=> push("/chanchitofeliz")}>Push</button>
      <Routes>
        <Route path="/" element={
          <React.Fragment>
            <h1>Inicio</h1>
          </React.Fragment> 
        } >

        </Route>
        <Route path="/portafolio" element={
          <React.Fragment>
            asdsda
            <Portafolio/>
          </React.Fragment>
        }>
          <Route path="/:id" element={
            <React.Fragment>
              <div>
                hola
              </div>
            </React.Fragment>
          }>
          </Route>
       
        </Route>
      </Routes>
     </section>
    </div>
  )


export default App
 