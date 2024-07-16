import { useState } from 'react'
import { Container } from "react-bootstrap"
import './App.css'
import "./index.css"
import Header from '../src/component/Header'
/* we need to loop on the data array so here shoud to import the data and give the props for all children */
function App() {
  
  return (
    <Container className='text-center mt-4'>
     <Header/>




    </Container>
  )
}

export default App
