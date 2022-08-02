import * as Styled from "./styled";
import ButtonsLogin from "../../components/Buttons/index";
import LoginSections from "../../components/SectionLogin/index";

const Login = () => {
  return (
    <Styled.DivLogin>
      <img src="" alt="Logo" />

      <Styled.ContentBorder>
        <Styled.Plog>Login</Styled.Plog>

        <LoginSections />
        <ButtonsLogin />
      </Styled.ContentBorder>
    </Styled.DivLogin>
  );
};

export default Login;
