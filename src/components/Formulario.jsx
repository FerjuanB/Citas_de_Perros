import {useState,useEffect} from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('')
  const [propietario,setPropietario] = useState('')
  const [email,setEmail] = useState('')
  const [fecha,setFecha] = useState('')
  const [sintomas,setSintomas] = useState('')
  
  useEffect(()=>{
if (Object.keys(paciente).length > 0){
setNombre(paciente.nombre)
setPropietario(paciente.propietario)
setEmail(paciente.email)
setFecha(paciente.fecha)
setSintomas(paciente.sintomas)
}
  },[paciente])

  const [error,setError]=useState(false)

  const generarId = ()=>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha;
  }

  const handleSubmit = (e)=>{
      e.preventDefault()
      console.log('Enviando')
  
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)
      return;
    }
    setError(false)

    const objPaciente ={
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas
    }

    if(paciente.id){
      //editando
    objPaciente.id=paciente.id
    
    const pacientesActual=pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)

    setPacientes(pacientesActual)
    setPaciente({})
    }else{
      //nuevo reg
      objPaciente.id = generarId()
      setPacientes([...pacientes, objPaciente]);
    }
    
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  
  }
    

    return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center ">Seguimiento pacientes </h2>
   
   
   
   <p className="text-lg mt-5 text-center mb-10">
    Añade Pacientes y {''}
    <span className="text-blue-600 font-bold">Administralos</span>
   </p>
   
   
   <form 

   onSubmit={handleSubmit}
   className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10">
    {error && 
   <Error>
    <p>Debés completar todos los campos!</p>
    </Error>
            }
    <div className="mb-5">
    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold"> Nombre Mascota</label>  
      
      <input  
          type="text"
          id="mascota"
          placeholder="Nombre de la Mascota" 
          className="border-2 w-full p-2 m-2 placeholder-blue-200 rounded-md"
          value={nombre}
          onChange={(e)=>{setNombre(e.target.value)}}
      />
    
    </div> 


    <div className="mb-5">
    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold"> Nombre Propietario</label>  
      
      <input 
        type="text"
        id="propietario"
        placeholder="Nombre del Propietario" 
        className="border-2 w-full p-2 m-2 placeholder-blue-200 rounded-md"
        value={propietario}
          onChange={(e)=>{setPropietario(e.target.value)}}
      />
    
    </div> 

    <div className="mb-5">
    <label htmlFor="email" className="block text-gray-700 uppercase font-bold"> Correo Electronico</label>  
    <input 
      type="email" 
      id="email"
      placeholder="Dirección de correo electronico" 
      className="border-2 w-full p-2 m-2 placeholder-blue-200 rounded-md"
      value={email}
      onChange={(e)=>{setEmail(e.target.value)}}
      />
    
    </div> 
    <div className="mb-5">
    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold"> Alta</label>  
    <input 
      type="date"
      id="alta"
      className="border-2 w-full p-2 m-2 placeholder-indigo-200 rounded-md"
      value={fecha}
      onChange={(e)=>{setFecha(e.target.value)}}
      />
    
    </div> 
   
    <div className="mb-5">
    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>  
    
      <textarea 
     name="sintomas" 
     id="sintomas" 
     placeholder="Describe los síntomas."
     value={sintomas}
     onChange={(e)=>{setSintomas(e.target.value)}}
     className="border-2 w-full p-2 m-2 placeholder-indigo-200 rounded-md"                                                     />
     
    </div> 

    <input
     type="submit" 
     value={paciente.id? "Editar Paciente":"Agregar Paciente"}
     className="bg-blue-600 w-full p-3 rounded text-white uppercase font-bold hover:bg-indigo-950 cursor-pointer transition-colors"/>
    
   </form>
   
    </div>
  )
}

export default Formulario