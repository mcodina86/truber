import React from "react";

const Header = () => {
  return (
    <header className="site-header">
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <h1>Truber</h1>
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary is-small">
                <strong>Registrarse</strong>
              </button>
              <button className="button is-light is-small">Entrar</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
