import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import livroImg from "../imagens/livro.png";
import { deleteFavoritos, getFavoritos } from "../servicos/favoritos";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`;

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos(); // Busca os favoritos
    setFavoritos(favoritosDaAPI); // Atualiza o estado com os favoritos
  }
  async function deletarFavorito(id) {
    await deleteFavoritos(id); // Deleta o favorito
    await fetchFavoritos(); // Atualiza a lista de favoritos
    alert(`Livro de id:${id} removido dos favoritos!`);
  
  }
  useEffect(() => { // Busca os favoritos ao carregar a página
    fetchFavoritos();
  }, []);
  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      <ResultadoContainer>
        {favoritos.map((favorito) => (
          <Resultado key={favorito.id} onClick={() => deletarFavorito(favorito.id)}>
            <img src={livroImg} alt={favorito.nome} />
            <p>{favorito.nome}</p>
          </Resultado>
        )) || <p>Você ainda não tem favoritos</p>}
      </ResultadoContainer>
    </AppContainer>
  );
}

export default Favoritos;
