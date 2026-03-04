import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {
  const css = {
    backgroundColor: time.corSecundaria,
  };

  return (
    (colaboradores.length > 0) ? <section style={css} className="time">
      <input value={time.corSecundaria} onChange={evento => mudarCor(evento.target.value, time.nome)} type="color" className="input-cor"></input>
      <h3 style={{ borderBottomColor: time.corPrimaria }}>{time.nome}</h3>

      <div className="colaboradores">
        {colaboradores.map((colaborador, indice) => {
          return <Colaborador key={indice} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDeFundo={time.corPrimaria} aoDeletar={aoDeletar}></Colaborador>
          })}
      </div>
    </section>
    : ''
  );
};

export default Time;
