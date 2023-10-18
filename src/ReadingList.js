import { useContext } from "react";
import LikedBooksContext from "./LikedBooksContext";

function ReadingList() {
    const {likedBooks} = useContext(LikedBooksContext);

    return ( 
        <div>
            {/* {likedBooks.map(book => {
                const {id, bookCover, title, authors, link} = book;
                return (
                    
                )
            })} */}
        </div>
     );
}

export default ReadingList;