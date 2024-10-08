import React, { useEffect, useState } from 'react'
import "../Pages/CSS/P_Home.css"

const P_aside = ({ setDiv1, setDiv2, setDiv3, setDiv4, setToggle, opacity, set_toggle_menu_image, set_rotate_IMG }) => {
  const [activeLink, setActiveLink] = useState(null);
  const handleClick = (index) => {
    setActiveLink(index);
    if (index === 0) {
      setDiv1("block");
      setDiv2("none");
      setDiv3("none");
      setDiv4("none");
      setToggle("-100");
      opacity(1); set_rotate_IMG(1);
      set_toggle_menu_image("/Menu.svg");


    }
    if (index === 1) {
      setDiv1("none");
      setDiv2("block");
      setDiv3("none");
      setDiv4("none");
      setToggle("-100");
      opacity(1); set_rotate_IMG(1);
      set_toggle_menu_image("/Menu.svg");


    }
    if (index === 2) {
      setDiv1("none");
      setDiv2("none");
      setDiv3("block");
      setDiv4("none");
      setToggle("-100");
      opacity(1); set_rotate_IMG(1);
      set_toggle_menu_image("/Menu.svg");


    }
    if (index === 3) {
      setDiv1("none");
      setDiv2("none");
      setDiv3("none");
      setDiv4("block");
      setToggle("-100");
      opacity(1); set_rotate_IMG(1);
      set_toggle_menu_image("/Menu.svg");


    }

  };

  const [word, setWord] = useState("Your Publishes");
  useEffect(() => {
    if (window.innerWidth < 600) {
      setWord("Publishes");
    }
  }, []);
  return (
    <>
      <ul>
        <li>
          {['Add News', word, 'Feeds', 'Logout'].map((text, index) => (
            <button
              key={index}
              className={activeLink === index ? 'active-link-btn' : '' && "home-aside-link-btn"}
              onClick={() => handleClick(index)}
            >
              {text}
            </button>
          ))}
        </li>
      </ul>
    </>
  )
}

export default P_aside