import styled, { css } from "styled-components";



export const DivLogin = styled.div`
${({theme}) => css `
display:flex;
justify-content: center;
img{
    height: 5rem;
    width: 4rem;
}

`}
`
export const ContentBorder = styled.div`
${({theme}) => css`
 width: 32rem;
 height: 33rem;
 display: flex;
 flex-direction: column     ;
 border-radius: 10px;
 margin-top: 10vh;
 background: rgba(0,0,0,0.4);
 border: 1px solid #fff ;
 `}
`


export const Plog = styled.div`
${({theme}) => css`
 font-family: ${theme.constants.titleFontFamily};
 font-size: ${theme.constants.titleFontSize};
 color: ${theme.colors.primaryBgColor};
 margin: 0 11rem;
`}`