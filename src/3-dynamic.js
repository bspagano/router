
 import React from 'react'
 import {Route, Link, Routes, useMatch, useParams} from "react-router-dom"
 
 const Proyecto = () => {
   const match = useMatch('/portafolio/:proyecto_id')
   const params = useParams()
   console.log({match,params})
   const {proyecto_id} = match.params

   return (
     <h2>Proyecto {match.params.proyecto_id} </h2>
   )
 }
 const Portafolio = () => {
   const params = useParams()
   console.log(params)
   return (
     <div>
        <h1>Portafolio</h1>   
       <ul>
         <li>
           <Link to={"/portafolio/proyecto-1"}>Proyecto 1 </Link>
         </li> 
         <li>
           <Link to={"/portafolio/proyecto-2"}>Proyecto 2 </Link>
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
  