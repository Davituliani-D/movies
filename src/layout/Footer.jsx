import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer #4a148c purple darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Movies Online
          <a className="grey-text text-lighten-4 right" href="https://github.com/Davituliani-D">Repositories</a>
        </div>
      </div>
    </footer>


  );
};

export default Footer;
