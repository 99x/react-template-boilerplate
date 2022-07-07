import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import AuthNav from './auth-nav';

const NavBar = () => {
  return (
    <>
      <div className="nav-container mb-3">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <AuthNav />
        </nav>
      </div>
    </>
  );
};

export default NavBar;