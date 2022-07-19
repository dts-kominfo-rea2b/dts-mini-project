import loginImage from "../img/avager.jpg";
import { Button, TextField } from "@mui/material";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <div className="login">
      <div className="login_pic">
        <img src={loginImage} alt="loginImage" />
      </div>
      <div className="login_field">
        {!hasAccount ? <h2>Login:</h2> : <h2>Sign up:</h2>}
        <div className="field">
          <TextField
            required
            value={email}
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            className="textField"
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            label="Email"
          />
          <p className="errorMsg">{emailError}</p>
        </div>
        <div className="field">
          <TextField
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="textField"
            name="password"
            type="password"
            placeholder="password"
            label="Password"
          />
          <p className="errorMsg">{passwordError}</p>
        </div>
        {hasAccount ? (
          <>
            <Button onClick={handleSignup} variant="contained" color="danger">
              Sign up
            </Button>
            <p>
              have an account ?
              <span
                style={{ color: "#ff0000" }}
                onClick={() => setHasAccount(!hasAccount)}
              >
                {" "}
                Login
              </span>
            </p>
          </>
        ) : (
          <>
            <Button onClick={handleLogin} variant="contained" color="danger">
              Login
            </Button>
            <p>
              Don't have an account ?
              <span
                style={{ color: "#ff0000" }}
                onClick={() => setHasAccount(!hasAccount)}
              >
                {" "}
                Sign up
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
