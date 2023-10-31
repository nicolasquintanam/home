import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        Built with <i className="fas fa-heart" /> using{" "}
        <i className="fab fa-react" /> <br />
        Code available at:{" "}
        <a
          rel="noopener"
          href="https://github.com/nicolasquintanam/portfolio"
          aria-label="Portfolio"
        >
          {" "}
          <span className="badge bg-dark">Portfolio</span>
        </a>{" "}
        <p>
          <small className="text-muted">
            Original by{" "}
            <a href="https://github.com/hashirshoaeb">
              {" "}
              <span>Hashir Shoaib</span>
            </a>{" "}
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
