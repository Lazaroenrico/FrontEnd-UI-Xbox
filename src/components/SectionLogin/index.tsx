import * as Styled from "./styled";

const SectionsLogin = () => {
  return (
    <div>
      <Styled.LoginSections>
        <p>Name</p>
        <input
          type="text"
          name="login"
          id="login"
          placeholder=" Digite o seu Login de acesso"
        />
      </Styled.LoginSections>
      <Styled.LoginSections>
        <p>Password</p>
        <input
          type="text"
          name="login"
          id="login"
          placeholder=" Digite a sua Senha de acesso"
        />
      </Styled.LoginSections>
    </div>
  );
};

export default SectionsLogin;
