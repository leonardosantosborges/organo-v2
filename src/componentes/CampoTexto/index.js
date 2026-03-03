import './CampoTexto.css';

const CampoTexto = (props) => {
    const placeholderModidificada = `${props.placeholder}...`;

    // let valor = '';

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    } 

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModidificada}></input>
        </div>
    )
}

export default CampoTexto;