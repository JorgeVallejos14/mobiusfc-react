import jugadores from "./data/jugadores"
import PlayerCard from "./components/PlayerCard"
function App() {
  return (
    <div>
      <h1>Mobius FC</h1>
      {
  jugadores.map((jugador) => (
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