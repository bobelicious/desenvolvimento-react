function Topico(props){
    let lido = props.lido;
    let modificar = props.modificar;

    return(
        <div>
            <h2><button onClick={modificar}>{lido}</button>{props.nome}: </h2>
            <p>{props.descricao}</p>
        </div>
    )
}

export default Topico