import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const css = {
    backgroundColor: props.corSecundaria,
  };

  return (
    (props.colaboradores.length > 0) ? <section style={css} className="time">
      <h3 style={{ borderBottomColor: props.corPrimaria }}>{props.nome}</h3>

      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corDeFundo={props.corPrimaria}
          ></Colaborador>
        ))}
      </div>
    </section>
    : ''
  );
};

export default Time;
