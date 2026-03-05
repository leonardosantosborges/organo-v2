import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    { id: uuidv4(), nome: "Programação", cor: "#D9F7E9" },
    { id: uuidv4(), nome: "Front-End", cor: "#E8F8FF" },
    { id: uuidv4(), nome: "Data Science", cor: "#F0F8E2" },
    { id: uuidv4(), nome: "DevOps", cor: "#FDE7E8" },
    { id: uuidv4(), nome: "Ux e Design", cor: "#FAE9F5" },
    { id: uuidv4(), nome: "Mobile", cor: "#FFF5D9" },
    { id: uuidv4(), nome: "Inovação e Gestão", cor: "#FFEEDF" },
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // debugger
    setColaboradores([...colaboradores, { ...colaborador, id: uuidv4() }]);
  };

  function deletarColaborador(id) {
    console.log("deletando colaborador: ", id);
    setColaboradores(colaboradores.filter(colaborador => colaborador.id != id))
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      }),
    );
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      ></Formulario>
      {times.map((time) => (
        <Time
          mudarCor={mudarCorDoTime}
          key={time.nome}
          time={time}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome,
          )}
          aoDeletar={deletarColaborador}
        ></Time>
      ))}
    </div>
  );
}

export default App;
