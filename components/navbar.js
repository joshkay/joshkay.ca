import React from 'react';
import Link from 'next/link'

export default () =>
(
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span>
        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/static/profile.png" alt="" />
      </span>
      <span className="d-lg-none navbar-name">Josh Kay</span>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#skills">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
        </li>
      </ul>
    </div>
  </nav>
);