import "./Footer.css";

export const Footer = (props) => {
  return (
    <footer className="App-footer">
      <div className="footer-container">
        <div className="footer-logos-container">
          {props.images.map((item) => (
            <img
              className="footer-logos-img"
              src={item.logo}
              alt={item.logoFor}
            />
          ))}
        </div>
        <div className="footer-text-container">
          <span className="footer-text">
            Copyright ©2020 All rights reserved{" "}
          </span>
        </div>
      </div>
    </footer>
  );
};
