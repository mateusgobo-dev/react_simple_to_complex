import react from "react";

function App() {

  let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
  const [nutri, setNutri] = react.useState([]);

  react.useEffect(() => {
    function loadNutri() {
      fetch(url)
      .then((response) => response.json())
      .then((data) => setNutri(data));
    }    
    loadNutri();
  }, []);

  return (
    <div className="container">
      <header><strong>React Nutri</strong></header>
      {
        nutri.length === 0 ? (
          <span>Carregando...</span>
        ) : (
          nutri.map((item) => {
            return (
              <article key={item.id} className="post">
                <strong className="titulo">{item.titulo}</strong>
                <img src={item.capa} alt={item.titulo} />
                <p className="subtitulo">{item.subtitulo}</p>
                <a className="botao" href={item.link} target="_blank" rel="noreferrer">Acessar</a>
              </article>
            );
          })
        )
      }
    </div>
  );
}

export default App;
