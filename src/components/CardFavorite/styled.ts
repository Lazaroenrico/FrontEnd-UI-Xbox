import styled, { css } from "styled-components";

export const FavoriteContainer = styled.aside`
${({theme}) => css`
 background-color: whitesmoke;
 h2{
    font-family: ${theme.constants.titleFontFamily};
    font-size: ${theme.constants.titleFontSize};
    color: rgba(209, 141, 141, 1);
 }
`}
`

export const FavoriteCard = styled.section`
${({theme}) => css`
 background-color: #3A475B;
 width: 13rem;
 height: 13rem;
 border-radius: 1.438rem;
 margin: 0 4.813rem;
`
}
`
export const IconHeartFavorite = styled.div`
${() => css`
margin: 0 11rem;
border-radius: 23px;
img{
   padding: 5px;
}
`}
`