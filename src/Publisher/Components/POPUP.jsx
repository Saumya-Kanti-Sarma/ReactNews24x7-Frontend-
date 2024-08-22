import React from 'react'
import "../../index.css"
const POPUP = ({ message, buttonText, display }) => {
  return (
    <>
      <div className="popuparea" style={{
        display: display,
        backgroundColor: "whitesmoke",
        height: "40vh",
        width: "300px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.1)",
        transition: "0.5s ease-in-out"
      }}>
        <p>{message}</p>
        <button className='def-btn' style={{
          padding: "20px 50px",
          border: "none",
          borderRadius: "5px",
          fontSize: "20px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
          onClick={() => {
            window.location.reload();
            display = "none";
          }}>{buttonText}</button>
      </div>
    </>
  )
}

export default POPUP
