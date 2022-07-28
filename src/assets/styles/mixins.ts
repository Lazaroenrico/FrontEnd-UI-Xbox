import { css } from "styled-components";
import { colors } from "./colors";
import { constants } from "./constants";

const titleStyle = () => css`
  font-family: ${constants.titleFontFamily};
  font-size: ${constants.titleFontSize};
`;

export const mixins = {
 titleStyle,
}