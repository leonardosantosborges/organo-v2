import './campo.css';

const Campo = (props) => {
    const placeholderModidificada = `${props.placeholder}...`;

    // let valor = '';

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    } 

    return (
        <div className={`campo campo-${props.type}`}>
            <label>{props.label}</label>
            <input type={props.type ?? 'text'} value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModidificada}></input>
        </div>
    )
}

export default Campo;