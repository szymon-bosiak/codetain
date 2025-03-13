import { Link } from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header_container">
          <h1 className="header_heading">
            Szymon<i className="header_heading-dot">.</i>
          </h1>
          <nav className="header_nav">
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
