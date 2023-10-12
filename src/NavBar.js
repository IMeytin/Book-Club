import { Link } from "react-router-dom";
import logo from './Style-Images/BookClubLOGO.png'

function NavBar() {
    return ( 
        <header>
            <nav>
                <div>
                    <img src={logo} alt="logo" height="90px" />
                </div>
                <ul className="nav-links">
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/Books">Books</Link>
                    </li>
                    <li>
                        <Link className="link" to="/ReadingList">Reading List</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;