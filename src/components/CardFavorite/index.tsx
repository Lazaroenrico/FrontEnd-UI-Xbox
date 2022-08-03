import * as Styled from "./styled";
import { useState } from "react";

const CardFavorite = () =>{
 
    const [selectFavorite, setSelectFavorite] = useState(

    )


    return(
        <Styled.FavoriteContainer>
        <h2>FAVORITE</h2>
        <Styled.FavoriteCard>
          <Styled.IconHeartFavorite>
            <img src="" alt="icon" />
          </Styled.IconHeartFavorite>
          <img src="" alt="MOCK" />
          <p>NAME</p>
          <div>
            <img src="" alt="Dash" />
          </div>
        </Styled.FavoriteCard>
      </Styled.FavoriteContainer>
    )
}

export default CardFavorite;