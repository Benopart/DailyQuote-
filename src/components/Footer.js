import React from "react";

const Footer = ({ developer }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        &copy; {currentYear} {developer}
      </p>
    </footer>
  );
};

Footer.defaultProps = {
  copyright: new Date().getFullYear(),
  developer: "Behnam Arabi",
};

export default Footer;
