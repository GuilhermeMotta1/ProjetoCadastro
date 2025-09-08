import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Login from "./pages/Login"
import ListarUsuario from "./pages/Lista"
import PrivateRoute from "./components/PrivateRoute";

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Cadastro/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route 
          path="/listarusuarios" 
          element={
            <PrivateRoute>
              <ListarUsuario />
            </PrivateRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
