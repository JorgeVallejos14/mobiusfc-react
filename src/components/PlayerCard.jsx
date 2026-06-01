function PlayerCard(props) {
    return (
        <div>
            <h2>{props.nombre}</h2>
            <p>Posición: {props.posicion}</p>
            <p>Número: {props.numero}</p>
            <button
            onClick={() => props.agregarFavorito(props.nombre)}>⭐ Favorito
            </button>
        </div>
    )
}

export default PlayerCard