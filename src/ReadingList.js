import { useContext } from "react";
import LikedBooksContext from "./LikedBooksContext";
import BookCard from "./BookCard";
import NoBooks from './Style-Images/ReadingList.png'

function ReadingList() {
    const {likedBooks, setLikedBooks} = useContext(LikedBooksContext);

    const onLikeChange = ( booksDetails, isLiked) => {
        if(!isLiked) {
            setLikedBooks(prevBooks => prevBooks.filter(book => book.id !== booksDetails.id))
        }
    }

    return ( 
        <main>
            {likedBooks.length > 0 &&
                <div className="header-container">
                    <h2 className="header">Your Reading List</h2>
                </div>}
            <section className={likedBooks.length > 0 ? "bookList-section" : "NoReadingList"}>
                {likedBooks.length > 0 ? (
                    likedBooks.map (book => {
                        const {id, bookCover, title, authors, link} = book;
                        return (
                                <BookCard 
                                    key={id}
                                    id = {id}
                                    bookCover = {bookCover}
                                    title = {title}
                                    authors = {authors}
                                    link = {link}
                                    onLikeChange = {onLikeChange}
                                    likedBooks = {likedBooks}
                                />

                        )
                    })
                ): (
                    <div>
                        <img src={NoBooks} alt="" width={600} />
                    </div>
                )}
            </section>
        </main>
     );
}

export default ReadingList;