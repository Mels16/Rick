import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-[1pc]">
                <div className="container">
                    <Link to="/" className=" fs-3 ubuntu navbar-brand ">
                        Rick And Morty <span className="text-[#a223f13]"> Wiki</span>
                    </Link>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/episode">
                Episode
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/location">
               Location
              </NavLink>
            </li>
          </ul>
        </div>
            </nav>
        </>
    )
}

export default Navbar
