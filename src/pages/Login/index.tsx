const Login = () => {
  return (
    <main>
      <img src="" alt="Logo" />

      <div>
        <section>
          <p>Login</p>
          <input
            type="text"
            name="login"
            id="login"
            placeholder=" Digite o seu Login de acesso"
          />
        </section>
        <section>
          <p>Password</p>
          <input
            type="text"
            name="password"
            id="password"
            placeholder=" Digite o sua Senha de acesso"
          />
        </section>


        <p>OR</p>
        <button>SIGN OUT</button>
      </div>
    </main>
  );
};

export default Login;
