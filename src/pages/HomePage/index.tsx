import * as Styled from "./styled";

const HomePage = () => {
  return (
    <Styled.DivHome>
      <aside className="ComponentFavorite">
        <h2>FAVORITE</h2>
        <section>
          <img src="" alt="MOCK" />
          <div>
            <img src="" alt="icon" />
          </div>
          <p>NAME</p>
          <div>
            <img src="" alt="Dash" />
          </div>
        </section>
      </aside>

      <aside className="ComponentGenre">
        <h2>GENRE</h2>
        <section>
          <img src="" alt="background-genre" />
          <p>NOME DO GENERO</p>
        </section>
      </aside>
    </Styled.DivHome>
  );
};

export default HomePage;
