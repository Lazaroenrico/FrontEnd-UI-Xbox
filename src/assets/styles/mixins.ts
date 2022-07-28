import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";



const titleStyle = () => css`
  font-family: ${constants.titleFontFamily};
  font-size: ${constants.titleFontSize};
`;

const ButtonAqua = () => css`
  width: 124px;
  height: 48px;
  border-radius: 10px;
  background-color: ${colors.buttonCreUpColor};
  font-family: ${constants.textFontFamily};
  font-weight: bold;
  font-size: ${constants.textFontSize};
  text-align: center;
  cursor: pointer;
  transition: all ease-in-out 0.6s;
    :hover {
      transform: scale(1.1);
  }
`
const ButtonCancel = () => css`
  width: 130px;
  height: 48px;
  border-radius: 10px;
  background-color: #A32222;
  font-family: ${constants.textFontFamily};
  font-weight: bold;
  font-size: ${constants.textFontSize};
  text-align: center;
  cursor: pointer;
  transition: all ease-in-out 0.6s;
    :hover {
      transform: scale(1.1);
  }
`

const titleModal = () => css`
text-align: center;
font-family: ${constants.titleFontFamily};
font-size: ${constants.titleFontSize};
color: ${colors.titleColor};
`


export const mixins = {
  titleStyle,
  ButtonAqua,
  ButtonCancel,
  titleModal,

}