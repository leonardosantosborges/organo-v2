import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo, aoDeletar}) => {
    return (
        <div className='colaborador'>
            <div onClick={aoDeletar} className='deletar'>Deletar</div>
            
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={imagem}></img>
            </div>

            <div className='rodape'>
                <h4>{nome}</h4>

                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador