import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__item home">
                <Link to="/">Home</Link>
            </div>
            <div className="nav__item search">
                <Link to="/search">Search</Link>
            </div>
            <div className="nav__item account">
                <Link to="/account">Account</Link>
            </div>
        </nav>
    )
}

export default Nav;