import React, { useState } from 'react'
import P_aside from '../Components/P_aside'
import P_AddNews from './P_AddNews'
import P_AllNews from './P_AllNews'
import P_Feed from './P_Feed'
import P_Logout from './P_Logout';

const P_Home = () => {
  const [div1, setDiv1] = useState("block");
  const [div2, setDiv2] = useState("none");
  const [div3, setDiv3] = useState("none");
  const [div4, setDiv4] = useState("none");

  // menu funtion
  const [toggleMenu, settoggleMenu] = useState(-100);
  const [opacity, setOpacity] = useState(1);
  const menuClick = () => {
    toggleMenu === -100 ? settoggleMenu(1) : settoggleMenu(-100);
    opacity === 1 ? setOpacity(0.2) : setOpacity(1);
  }
  return (
    <>
      <div className="parent-div">
        <div className="qwiu">
          <img src="/Menu.svg" alt="" className='menu' onClick={menuClick} />
          <h1 className='qwiu-heading'>Welcome to ReactNews24x7</h1>
        </div>

        <div id='main-area'>
          <aside style={{ transform: `translateX(${toggleMenu}%)` }}>
            <P_aside setDiv1={setDiv1} setDiv2={setDiv2} setDiv3={setDiv3} setDiv4={setDiv4} />
          </aside>
          <main style={{ opacity: opacity }}>
            <div>
              <div style={{ display: div1 }}><P_AddNews /></div>
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
