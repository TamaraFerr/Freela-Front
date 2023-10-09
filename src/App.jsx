import HomePage from "./pages/HomePage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import SignInPage from "./pages/SignInPage.jsx"
import ModelInfosPage from "./pages/ModelInfosPage.jsx"
import ModelsPage from "./pages/ModelsPage.jsx"
import AddModelPage from "./pages/AddModelPage.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthContext from "./contexts/AuthContext.jsx"
import { useState } from "react"

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))

  return (
    <AuthContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/modelo-info/:id" element={<ModelInfosPage />}/>
          <Route path="/adicionar-modelo/:id" element={<AddModelPage />}/>
          <Route path="/gerenciar-modelos/:id" element={<ModelsPage />}/>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
