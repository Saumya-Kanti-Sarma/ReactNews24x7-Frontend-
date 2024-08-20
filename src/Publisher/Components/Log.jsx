import React, { useEffect, useState } from 'react'
import '../Pages/CSS/P_RegLog.css';
import axios from "axios";
import Cookies from 'js-cookie';

const REG_LOG = ({ ParamTitle, paramEmail, ParamButton }) => {
  // Password Show and Hide function
  const [showPass, setShowPass] = useState("password");
  const [showPassColor, setShowPassColor] = useState("black");
  function showPassword() {
    showPass == "password" ? setShowPass("text") : setShowPass("password");
    showPassColor == "black" ? setShowPassColor("#d30909") : setShowPassColor("black");
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [btnOpacity, setBtnOpacity] = useState(0.5);
  const [loader, setLoader] = useState("none")
  useEffect(() => {
    if (paramEmail == "block") {
      if (name.length >= 1 && !name.includes(" ") && email.includes("@") && email.includes(".com") && password.length >= 5) {
        setBtnDisable(false);
        setBtnOpacity(1);
      }

    }
    else if (paramEmail == "none") {

      if (name.length >= 1 && !name.includes(" ") && password.length >= 5) {
        setBtnDisable(false);
        setBtnOpacity(1);
      }
    }
    else {
      setBtnDisable(true);
      setBtnOpacity(0.5);
    }
  }, [name, email, password]);


  useEffect(() => {
    if (Cookies.get(`publisher_credentials`)) {
      window.location.href = "/publisher/"
    }
  }, [])
  const saveDataToMongoDB = async () => {
    setLoader("block");
    // Registration
    if (name && email && password) {
      const datas = {
        name: name,
        email: email,
        password: password,
      }
      axios.post(import.meta.env.VITE_PUBLISHER_REGISTER_URL, datas)
        .then((res) => {
          if (res.status == 201) {
            Cookies.set(`publisher_credentials`, JSON.stringify(res.data.name))
          }
        }).then(() => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        })


    }
    // Login
    else if (name && !email && password) {
      const datas = {
        name: name,
        password: password,
      }
      axios.post(import.meta.env.VITE_PUBLISHER_LOGIN_URL, datas)
        .then((res) => {
          console.log(res);
          if (res.data.message == "Login Successful") {
            Cookies.set(`publisher_credentials`, JSON.stringify(res.data.name))
          }
        })
        .then(() => {
          window.location.reload();
        })
    }
    else {
      return null
    }

  }
  return (
    <>
      <div className='register-form'>
        <h3 className='register-heading'>{ParamTitle}</h3>
        <input type="text" placeholder="Enter your name" required onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} style={{ display: paramEmail }} />
        <div className="password-area" required>

          <input type={showPass} placeholder='Enter your password' className='password-input' required onChange={(e) => setPassword(e.target.value)} />

          <button className='show-pas' onClick={showPassword} style={{ color: showPassColor }}>Show</button>
        </div>

        <button
          type='submit' className='def-btn register-submit-btn'
          disabled={btnDisable}
          style={{ opacity: btnOpacity }}
          onClick={saveDataToMongoDB}>
          {ParamButton}
        </button>
        <div className="loader-animation" style={{ display: loader }}>
        </div>

      </div>
    </>
  )
}

export default REG_LOG
