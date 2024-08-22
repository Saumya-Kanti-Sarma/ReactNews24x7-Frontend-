import React, { useState } from 'react'
import './CSS/P_Home.css'
import P_aside from '../Components/P_aside'
import P_AddNews from './P_AddNews';
import P_AllNews from './P_AllNews';
import P_Feed from "./P_Feed";
import P_Logout from "./P_Logout";

const P_Home = () => {
  // Making the toggle function
  const [rotate_IMG, set_rotate_IMG] = useState(1);
  const [toggle_menu_image, set_toggle_menu_image] = useState("/Menu.svg");
  const [toggle_aside, set_toggle_aside] = useState(-100);
  function toggleMenu() {
    opacity === 1 ? setOpacity(0.2) : setOpacity(1);
    if (toggle_aside == -100) {
      set_toggle_aside(0);
      set_rotate_IMG(-1);
      set_toggle_menu_image("/redmenu.svg");

    }
    else {
      set_toggle_aside(-100);
      set_rotate_IMG(1);
      set_toggle_menu_image("/Menu.svg");
    }
  }

  // Main Toggle Function
  const [div1, setDiv1] = useState("block");
  const [div2, setDiv2] = useState("none");
  const [div3, setDiv3] = useState("none");
  const [div4, setDiv4] = useState("none");
  const [opacity, setOpacity] = useState(1);

  return (
    <>
      <div className="home-parent">
        <div className="home-heading">
          <img src={toggle_menu_image} alt="" onClick={toggleMenu} style={{ transform: `scaleX(${rotate_IMG})` }} />
          <h1>Welcome to Publisher Home</h1>
        </div>
        <div className="home-content">

          <aside className='aside2'>
            <P_aside setDiv1={setDiv1} setDiv2={setDiv2} setDiv3={setDiv3} setDiv4={setDiv4} />
          </aside>

          <aside style={{ transform: `translateX(${toggle_aside}%)` }} className='aside1'>
            <P_aside setDiv1={setDiv1} setDiv2={setDiv2} setDiv3={setDiv3} setDiv4={setDiv4} setToggle={set_toggle_aside} opacity={setOpacity} set_rotate_IMG={set_rotate_IMG} set_toggle_menu_image={set_toggle_menu_image} />
          </aside>

          <main style={{ opacity: opacity }}>
            <div>
              <div style={{ display: div1 }} className='addnews-area'><P_AddNews /></div>
              <div style={{ display: div2 }}><P_AllNews /></div>
              <div style={{ display: div3 }}><P_Feed /></div>
              <div><P_Logout /></div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default P_Home
