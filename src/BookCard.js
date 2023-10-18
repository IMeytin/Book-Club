import { useState } from "react";
import likeImg from "./Style-Images/Like-Heart.png"
import likedImg from "./Style-Images/Liked-Heart.png"
import { Link } from "react-router-dom";

function BookCard({bookCover, title, authors, link, id ,onLikeChange, likedBooks}) {
    const isBookLiked = likedBooks.some(book => book.id === id);
    const [isLiked, setIsLiked] = useState(isBookLiked);

    const handleBookLike = () => {
        const newIsLikedState = !isLiked;
        setIsLiked(newIsLikedState);
        onLikeChange({id, bookCover, title, authors, link}, newIsLikedState)
    }


    return ( 
        <div className="book-card book-card--list">
            <div>
            {bookCover? (
                <img className="bookCoverImg"
                    src={bookCover}
                    alt='Book cover'
                />
            ) : (
                <p>No Image Available</p>
            )
            }

            <h4>{title}</h4>
            <p className='authors-list'>{Array.isArray(authors) ? authors.join(", ") : authors}</p>
            </div>
            <div className="btn-container">
                <Link to={link} className="bookCardBtnLink" target="_blank">Get the book</Link>
                <button onClick={handleBookLike} className="bookCardLikeBtn"> 
                    {isLiked ? <img src= {likedImg} alt="like" width="30px"/> : <img src= {likeImg} alt="like" width="30px"/>}
                </button>
            </div>
        </div>
    );
}

export default BookCard;