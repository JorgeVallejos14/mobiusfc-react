import jugadores from "./data/jugadores"
import PlayerCard from "./components/PlayerCard"
import {useState} from "react"
function App() {
  const [busqueda, setBusqueda] = useState("")
  const [favoritos, setFavoritos] = useState([])
  const agregarFavorito = (nombre) => {
  if (!favoritos.includes(nombre)) {
    setFavoritos([...favoritos, nombre])
  }
}
  const jugadoresFiltrados = jugadores.filter((jugador) =>
  jugador.nombre.toLowerCase().includes(busqueda.toLowerCase())
)
  return (
    <div>
      <h1>Mobius FC</h1>
      <input
      type="text"
      placeholder="Buscar jugador..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
    />
    <p>Jugadores encontrados: {jugadoresFiltrados.length}</p>
    <p>Favoritos: {favoritos.length}</p>
      {
  jugadoresFiltrados.map((jugador) => (
    <PlayerCard
      nombre={jugador.nombre}
      posicion={jugador.posicion}
      numero={jugador.numero}
      agregarFavorito={agregarFavorito}
    />
  ))
}
    </div>
  )
}

export default App