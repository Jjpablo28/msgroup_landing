import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout.jsx"
import HomePage from "./pages/HomePage.jsx"
import SonidoPage from "./pages/SonidoPage.jsx"
import ArtistasPage from "./pages/ArtistasPage.jsx"
import IngenieriaPage from "./pages/IngenieriaPage.jsx"
import DjsPage from "./pages/DjsPage.jsx"
import GaleriaPage from "./pages/GaleriaPage.jsx"

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sonido" element={<SonidoPage />} />
          <Route path="artistas" element={<ArtistasPage />} />
          <Route path="ingenieria" element={<IngenieriaPage />} />
          <Route path="djs" element={<DjsPage />} />
          <Route path="galeria" element={<GaleriaPage />} />
        </Route>
      </Routes>
  )
}