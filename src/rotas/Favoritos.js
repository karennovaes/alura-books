import styled from "styled-components";
const { useEffect, useState } = require("react");
const { getFavoritos } = require("../servicos/favoritos");

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);

  li {
    list-style: none;
  }
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos();
    setFavoritos(favoritosDaAPI);
  }
  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      <h1>Favoritos</h1>
      {favoritos.map((favorito) => (
        <p>{favorito.nome}</p>
      ))}
    </AppContainer>
  );
}

export default Favoritos;
