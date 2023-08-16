import React from "react";

const Footer = ({ author, copyright }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        &copy; {currentYear} {author}
      </p>
    </footer>
  );
};

Footer.defaultProps = {
  copyright: new Date().getFullYear(),
  author: "Your Name",
};

export default Footer;
