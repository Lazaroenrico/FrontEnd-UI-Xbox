import * as Styled from "./styled";
import CardFavorite from "../../components/CardFavorite/index";
import CardGenre from "../../components/CardGenre/index";

const HomePage = () => {
  return (
    <Styled.DivHome>
      <aside className="PerfilDoU">
        <img src="" alt="FTperfil" />
        <h2></h2>
        <p> estado do perfil</p>
        <button>Back</button>
      </aside>

      <aside className="Funcionalidade">
        <button>edit-perfil</button>
        <p>Search</p>
        <p>Date</p>
      </aside>

      <CardFavorite/>
      <CardGenre/>
    </Styled.DivHome>
  );
};

export default HomePage;
