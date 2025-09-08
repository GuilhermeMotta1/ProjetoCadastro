import { useEffect, useState} from "react"
import api from "../../services/api"
import { data } from "react-router-dom";


function ListarUsuario (){
    const [allusers, setAllUsers] = useState()
   


    // é chamado toda vez que a tela carrega

    useEffect(() => {

 async function loadUsers(){


  const token = localStorage.getItem("token");
const {data: { users },
} = await api.get("/listarusuarios", {
  headers: { Authorization: `Bearer ${token}` },
});

        
    setAllUsers(users)

}

        

        loadUsers()
    }, [])
    

function voltarParaPaginaAnterior() {
  history.back(); // Vai para a página anterior
}

    
    return(
        <div className='max-w-2xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md shadow-md'>
             <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>Listar de Usuario</h2>
            <ul className='space-y-2'>
                {allusers && allusers.map((user) => (
                    <li key={user.id} className='bg-gray-100 p-4 rounded-md'>
                    <p className="font-semibold">ID: {user.id}</p>
                     <p className="font-semibold">Nome: {user.name}</p>
                      <p className="font-semibold">Email: {user.email}</p>
                      </li>
                ))}
    
                        <button onClick={voltarParaPaginaAnterior} className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 '>Voltar</button>
            </ul>
        </div>
        
    )
}


export default ListarUsuario