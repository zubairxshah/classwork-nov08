import React from 'react'
import style from "./Header.module.css"

const Header = () => {
    return (
      <div className={style.container}>
  
          <div  className={style.header}>Navbar</div>
          <div className={style.header2}>
              <ul >
                  <li className={style.list}><link rel="stylesheet" href="/" />Home</li>
                  <li className={style.list}><link rel="stylesheet" href="#" />About</li>
                  <li className={style.list}><link rel="stylesheet" href="#" />Contact</li>
                  <li className={style.list}><link rel="stylesheet" href="#" />Privacy</li>
              </ul>
          </div>
  
      </div>
    )
  }
  
  export default Header