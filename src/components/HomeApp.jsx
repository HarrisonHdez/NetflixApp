import React, { useState, useEffect } from 'react';
import { Loader } from './Loader';


export const HomeApp = () => {
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 3000);
  }, []);

  if (loading) {
      return <Loader />;
  }

  return (
      <>
        <div className="home-banner">
            <div className="home-topbar">
                <img src="/public/Logo-Netflix-_1_.svg" alt="Logo" className="home-logo" />
                {/* <h2 className="logo">NETFLIX</h2> */}
                <button
                    className="home-login-button"
                    onClick={() => setShowLogin(!showLogin)}
                >
                    {showLogin ? "Cerrar sesión" : "Iniciar sesión"}
                </button>
            </div>
            {showLogin && (
                <div className="home-login-modal">
                    formulario o componente para el inicio de sesión
                </div>
            )}
            <div className="home-content">
                <h1 className="home-title">
                    Películas y series ilimitadas y mucho más
                </h1>
                <h2 className="home-subtitle">
                    Disfruta donde quieras. Cancela cuando quieras.
                </h2>
                <button className="home-start-button" >Comenzar</button>
                {/* <div className="home-arrow">
                    <i className="fas fa-arrow-right"></i>
                </div> */}
            </div>
        </div>









        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
        <div>
          <h4>Hola</h4>
        </div>
      </>
  );
} 