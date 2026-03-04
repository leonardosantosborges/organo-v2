import Colaborador from "../Colaborador";
import "./Time.css";
import hexToRgba from 'hex-to-rgba';

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {
  const css = {
    backgroundColor: hexToRgba(time.cor, '0.6'),
  };

  return (
    (colaboradores.length > 0) ? <section style={css} className="time">
      <input value={time.cor} onChange={evento => mudarCor(evento.target.value, time.nome)} type="color" className="input-cor"></input>
      <h3 style={{ borderBottomColor: time.cor }}>{time.nome}</h3>

      <div className="colaboradores">
        {colaboradores.map((colaborador, indice) => {
          return <Colaborador key={indice} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={time.cor} aoDeletar={aoDeletar}></Colaborador>
          })}
      </div>
    </section>
    : ''
  );
};

export default Time;
