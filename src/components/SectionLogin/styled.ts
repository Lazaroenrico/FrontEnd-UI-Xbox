import styled, { css } from "styled-components";



export const LoginSections = styled.section`
${({ theme }) => css`
width: 15rem;
 margin: 30px 80px 0px;
 input{
    background-color:#D9D9D9;
    width: 20rem;
    height: 30px;
    }
    

p{
    ${theme.constants.textFontFamily};
    font-size: 28px;
    color: #fff;
};
`}
`