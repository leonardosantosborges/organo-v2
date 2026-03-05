import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = ({
  colaborador,
  nome,
  imagem,
  cargo,
  corDeFundo,
  aoDeletar,
  aoFavoritar,
}) => {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        onClick={() => aoDeletar(colaborador.id)}
        className="deletar"
      ></AiFillCloseCircle>

      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={imagem}></img>
      </div>

      <div className="rodape">
        <h4>{nome}</h4>

        <h5>{cargo}</h5>

        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart {...propsFavorito} color="red" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
