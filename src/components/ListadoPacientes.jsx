
import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente,deletePaciente}) => {
  
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {pacientes && pacientes.length ? (
        <> 
        <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
    <p className="text-xl mt-5 mb-10 text-center">
      Administra tus {''}
      <span className="text-blue-600 font-bold">Pacientes y Citas</span>
    </p>


  {pacientes.map(paciente=>
    <Paciente
    key={paciente.id}
    paciente={paciente}
    setPaciente={setPaciente}
    deletePaciente={deletePaciente}
    />
  )}  
  </> 
      ):( 
  <>  <h2 className="font-black text-3xl text-center"> No hay pacientes aún</h2>
    <p className="text-xl mt-5 mb-10 text-center">
      Agregá pacientes que  {''}
      <span className="text-blue-600 font-bold">aparecerán acá debajo </span>
    </p>
  </>
      )
}
     
 
    </div>
    
  )
}

export default ListadoPacientes