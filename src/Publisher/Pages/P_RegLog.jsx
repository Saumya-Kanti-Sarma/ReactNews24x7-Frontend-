import React, { useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';
import './CSS/P_RegLog.css';
import axios from 'axios';
import REG_LOG from '../Components/Log';
const P_RegLog = () => {
  const [Text, setText] = useState("Already have an account? Login");
  const [toggle_Disp, settoggle_Disp] = useState("none");
  const [toggleDisplay, settoggleDisplay] = useState("block");
  function LoginFunc() {
    Text == "Already have an account? Login" ? setText("Don't have an Account? Register") : setText("Already have an account? Login");
    toggle_Disp == "none" ? settoggle_Disp("block") : settoggle_Disp("none");

    toggleDisplay == "none" ? settoggleDisplay("block") : settoggleDisplay("none");
  }

  async function handleGoogleLogin(response) {
    const data = JSON.parse(atob(response.credential.split('.')[1]));
    // console.log(data);
    const name_from_google = data.name;
    const nameWithoutSpace = name_from_google.replace(/ /g, "_");
    const email_from_google = data.email;
    const a_very_strong_password = import.meta.env.VITE_PUBLISHER_PASSWORD;
    const data_to_send = {
      name: nameWithoutSpace,
      email: email_from_google,
      password: a_very_strong_password
    }
    axios.post(import.meta.env.VITE_PUBLISHER_REGISTER_URL, data_to_send)
      .then((res) => {
        if (res.status == 201) {
          Cookies.set(`publisher_credentials`, JSON.stringify(data_to_send.name))
        }
      }
      ).then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // google media query
  const [googleWidth, setGoogleWidth] = useState(300);
  useEffect(() => {
    setGoogleWidth(window.innerWidth > 450 ? 300 : 150);
  }, []);
  return (
    <>
      <h1 className='heading'>Become a Publisher with ReactNews24x7</h1>
      <div className="form-area">

        <div style={{ display: toggleDisplay }}>

          <REG_LOG ParamTitle="Register with Email" paramEmail="block" ParamButton="Register" />

          <h1 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", marginTop: "20px" }}>OR</h1>
          <div className='google-area register-form' >
            <h3 className='register-heading'>Register with Google</h3>
            <GoogleLogin width={googleWidth} onSuccess={handleGoogleLogin} />
          </div>
        </div>

        <div className="login-area" style={{ display: toggle_Disp }}>

          <REG_LOG ParamTitle="Login" paramEmail="none" ParamButton="Login" />

        </div>
        <p to="/publisher/login" className='login-link' onClick={LoginFunc}>{Text}</p>
      </div>
    </>
  )
}

export default P_RegLog
