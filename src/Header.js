import "./Header.css";

export const Header = (props) => {
  return (
    <header className="App-header">
      <div className="header-nav-links-div">
        <a className="header-nav-links">Works</a>
        <a className="header-nav-links">Blog</a>
        <a className="header-nav-links">Contact</a>
      </div>
    </header>
  );
};
