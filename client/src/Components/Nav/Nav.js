import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className="navbar-brand text-warning" to="/">New York Times Scraper</Link>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><NavLink 
              exact
              to="/" 
              activeStyle={{
                fontWeight: 'bold',
                color: 'white'
              }}
            >Home</NavLink></li>

            <li><NavLink 
              to="/saved"
              activeStyle={{
                fontWeight: 'bold',
                color: 'white'
              }}
            >Saved</NavLink></li>
          </ul>
        </div>{/* /.navbar-collapse */}
      </div>{/* /.container-fluid */}
    </nav>
  );
};

export default Nav;