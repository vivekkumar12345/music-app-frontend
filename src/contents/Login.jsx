import styles from "./css/login.module.css";
import { FcBusinessman } from "react-icons/fc";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
  return (
    <>
      <head>
        <script src="https://d19bnlz1qkpkne.cloudfront.net/20230404192231/js/amazon-cognito-advanced-security-data.min.js"></script>
      </head>
      <div className={styles.loginContainer}>
        <FcBusinessman />
        <p>Welcome to Signin</p>
        <form
          name="cognitoSignInForm"
          method="POST"
          action="https://fishfarm.auth.ap-south-1.amazoncognito.com/login?client_id=20l9bqm5tm5nfn241vope0t7fj&amp;response_type=token&amp;scope=email+openid+phone&amp;redirect_uri=https%3A%2F%2F65.0.198.191%2Fapp"
        >
          <input
            type="hidden"
            name="_csrf"
            value="8aa53aa3-ac06-4f76-acc8-b632351259a9"
          />
          <input
            id="signInFormUsername"
            className={styles.inputform}
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            id="signInFormPassword"
            className={styles.inputform}
            type="text"
            name="password"
            placeholder="Password"
          />
          <input
            name="signInSubmitButton"
            type="submit"
            className={styles.signinbtn}
            value="Sign in"
          />
          <input
            type="hidden"
            class="form-control inputField-customizable"
            name="cognitoAsfData"
          ></input>
        </form>

        <a href="https://fishfarm.auth.ap-south-1.amazoncognito.com/oauth2/authorize?identity_provider=Google&redirect_uri=https://65.0.198.191/app&response_type=TOKEN&client_id=20l9bqm5tm5nfn241vope0t7fj&scope=email openid phone">
          <FaGoogle
            style={{ fontSize: "4vh", marginRight: "5%", color: "red" }}
          />
        </a>
        <FaFacebook style={{ fontSize: "4.5vh", color: "#316FF6" }} />
      </div>
    </>
  );
};

export default Login;
