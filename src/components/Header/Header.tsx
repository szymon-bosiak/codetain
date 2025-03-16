import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import "./header.css"

function Header() {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState("")

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location.pathname])

  return (
    <div>
      <div className="header">
        <div className="header__container">
          <h1 className="header__heading">
            Szymon<i className="header__heading-dot">.</i>
          </h1>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link
                  to="/"
                  className={`header__nav-link ${
                    activeLink === "/" ? "header__nav-link--active" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  to="/about"
                  className={`header__nav-link ${
                    activeLink === "/about" ? "header__nav-link--active" : ""
                  }`}
                >
                  About
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  to="/movies"
                  className={`header__nav-link ${
                    activeLink === "/movies" ? "header__nav-link--active" : ""
                  }`}
                >
                  Movies
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
