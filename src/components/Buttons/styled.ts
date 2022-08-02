import styled, { css } from "styled-components";



export const ButtonEnter = styled.button`
${({ theme }) => css`
 ${theme.mixins.ButtonAqua}; 
 color: ${theme.colors.textColor};
margin: 50px 180px 15px;

`} 
`
export const ButtonSignUp = styled.button`
${({ theme }) => css`
 font-family: ${theme.constants.textFontFamily};
 font-size: ${theme.constants.textFontSize};
 font-weight: bold;
 color: #FFFF;
 background-color: #224EA3;
 width: 136px;
 height: 48px;
 border-radius: 10px;
 cursor: pointer;
  transition: all ease-in-out 0.6s;
    :hover {
      transform: scale(1.1);
  }
margin: 15px 180px 26px;

`}
`

export const TextLogin = styled.p`
${({ theme }) => css`
 font-family: ${theme.constants.textFontFamily};
 font-size: ${theme.constants.textFontSize};
 color: ${theme.colors.textColor};
  margin: 0 15rem ;
  
`}
`


