import HomePage from "./pages/HomePage.jsx"
import SignUpPage from "./pages/SignUpPage.jsx"
import SignInPage from "./pages/SignInPage.jsx"
import ModelInfosPage from "./pages/ModelInfosPage.jsx"
import ModelsPage from "./pages/ModelsPage.jsx"
import AddModelPage from "./pages/AddModelPage.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/cadastro" element={<SignUpPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/modelo-info" element={<ModelInfosPage />}/>
        <Route path="/adicionar-modelo" element={<AddModelPage />}/>
        <Route path="/gerenciar-modelos" element={<ModelsPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
