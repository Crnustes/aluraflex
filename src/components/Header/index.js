import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.png"
import "./header.css"

const Header = () => {
  return (
    <header className="Header">
      <div className="logo"><img src={Logo} alt="" /></div>
      <div className="botones">
        
          <div className="boton boton_home"><Link to="/">Home</Link></div>
          <div className="boton boton_new"><Link to="/new-video">Nuevo Video</Link></div>
        
      </div>
    </header>
  );
};

export default Header;