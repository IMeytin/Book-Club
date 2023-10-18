function BookCard() {
    return ( 
        <div className="book-card listBooks">

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
                <p className='authors-list'>{authors}</p>
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