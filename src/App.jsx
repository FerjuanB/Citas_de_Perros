import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

 const [pacientes,setPacientes]=useState([])
 const [paciente,setPaciente]=useState({});

useEffect(() => {
  const localSt =()=>{
    const pacienteLs= JSON.parse(localStorage.getItem('pacientes')) ?? [];
  setPacientes(pacienteLs);
  }

localSt();
}, [])


 useEffect(()=>{
  localStorage.setItem('pacientes',JSON.stringify(pacientes))
 },[pacientes])

  
const deletePaciente=id=>{
  const pacientesActual=pacientes.filter(paciente => paciente.id !==id)
  
  setPacientes(pacientesActual)
}

  return (
   <div className="container mx-auto mt-20">
    < Header />

     <div className="mt-12 md:flex">
      <Formulario 
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      />  

      <ListadoPacientes 
      pacientes={pacientes}
      setPaciente={setPaciente}
      deletePaciente={deletePaciente}
      />  
    </div>
       
  </div>
  )
}

export default App
