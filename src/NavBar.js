import { Link } from "react-router-dom";
import logo from './Style-Images/BookClubLOGO.png'
import { useContext} from "react";
import LikedBooksContext from "./LikedBooksContext";

function NavBar() {
    const {likedBooks} = useContext(LikedBooksContext);

    return ( 
        <header>
            <nav>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/Books">Books</Link>
                    </li>
                    <li>
                        <Link className="link" to="/ReadingList">Reading List {likedBooks.length > 0 && `(${likedBooks.length})`}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;