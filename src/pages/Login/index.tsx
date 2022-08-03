import * as Styled from "./styled";
import ButtonsLogin from "../../components/Buttons/index";
import LoginSections from "../../components/SectionLogin/index";
import { useState } from "react";
import {LogoIcon} from "../../assets/icons/index";

const Login = () => {
  return (
    <Styled.DivLogin>
      
      <LogoIcon/>

      <Styled.ContentBorder>
        <Styled.Plog>Login</Styled.Plog>

        <LoginSections />
        <ButtonsLogin />
      </Styled.ContentBorder>
    </Styled.DivLogin>
  );
};

export default Login;
