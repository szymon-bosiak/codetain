import { Link } from "react-router-dom"
import "./header.css"

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header__container">
          <h1 className="header__heading">
            Szymon<i className="header__heading-dot">.</i>
          </h1>
          <nav className="header__nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
