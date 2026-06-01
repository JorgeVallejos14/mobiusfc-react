import jugadores from "./data/jugadores"
import PlayerCard from "./components/PlayerCard"
import {useState} from "react"
function App() {
  const [busqueda, setBusqueda] = useState("")
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
      {
  jugadoresFiltrados.map((jugador) => (
    <PlayerCard
      nombre={jugador.nombre}
      posicion={jugador.posicion}
      numero={jugador.numero}
    />
  ))
}
    </div>
  )
}

export default App