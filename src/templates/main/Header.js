import React from "react";
import { Link } from "react-router-dom";

import "./scss/main.scss";

export default function Header() {
  return (
    <header className="py-20 mb-20">
      <div className="container">
        <div className="d-flex justify-content-space-between">
          <nav>
            <Link className="nav-link" to="/">
              React Blog
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
