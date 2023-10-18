import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import bookImg from "./Style-Images/BookImg.png"
import BookCard from "./BookCard";
import LikedBooksContext from "./LikedBooksContext";
import Loader from "./Loader/Loader";

function Books() {
    const endpoint = "https://www.googleapis.com/books/v1/volumes?"
    const myKey = "AIzaSyBJHWDINLbrCYiVnCiRUXB8KJYIzoOferA"
    const maxResults = 15;
    const [stateLoader, setStateLoader] = useState(false)

    const { likedBooks, setLikedBooks } = useContext(LikedBooksContext)

    const onLikeChange = (bookDetails, isLiked) => {
        if (isLiked) {
            setLikedBooks(prevBooks => [...prevBooks, bookDetails])
        }
        else {
            setLikedBooks(prevBooks => prevBooks.filter(book => book.id !== bookDetails.id))
        }
    }


    const [inputInfo, setInputInfo] = useState('')
    const [booksArray, setBooksArray] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect (() => {
        if (!searchValue) return;
        const getBooks = async () => {
            setStateLoader(true)
            try{
                const response = await fetch (`${endpoint}q=${searchValue}&printType=books&key=${myKey}&maxResults=${maxResults}`);

                if (!response.ok) {
                    throw new Error(`There's a problem on our end. Please try again later.`);
                }
                const data = await response.json();

                if (!data.items || data.items.length === 0) {
                    throw new Error('No books found for your search term!');
                }

                const uniqueBooks = data.items.filter((currerntBook, index, array) => 
                    index === array.findIndex((b) => (
                        b.volumeInfo.title === currerntBook.volumeInfo.title &&
                        JSON.stringify(b.volumeInfo.authors) === JSON.stringify(currerntBook.volumeInfo.authors)
                        )
                    )
                )
                setStateLoader(false)
                setBooksArray(uniqueBooks)
                console.log(data.items)

            }
            catch (error){
                setStateLoader(false)
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Ok',
                    background: '#FAEBD7',
                    confirmButtonColor: '#6B4226',
                    iconColor: '#6B4226'
                });
            }
        }
        getBooks();
    },[searchValue])

    const finalSearch = (e) => {
        e.preventDefault();
        setSearchValue(inputInfo);
    }

    return ( 
        <main>
            {stateLoader && <Loader />}
            <div className="book-section-header">
                <img src={bookImg} alt="book" width={100}/>
                <h2 className="header">Find Your Next Literary Adventure</h2>
                <img src={bookImg} alt="book" width={100}/>
            </div>

            <form onSubmit={finalSearch}>
                <input value={inputInfo} onChange={(e) => setInputInfo(e.target.value)} className="search-input" type="text" />
                <button className="input-btn"><span className="material-icons-outlined">search</span></button>
            </form>

            <section className="bookList-section">
                {booksArray.map((book) => {
                    const {id, volumeInfo} = book;
                    const {title, authors, imageLinks, canonicalVolumeLink} = volumeInfo;
                    const bookCover = imageLinks?.thumbnail;
                    return (
                        <BookCard
                        key = {id}
                        id = {id}
                        bookCover = {bookCover}
                        title = {title}
                        authors = {authors && authors.join(", ")}
                        link = {canonicalVolumeLink}
                        onLikeChange = {onLikeChange}
                        likedBooks = {likedBooks}/>
                    )
                })}
            </section>
        </main>
    );
}

export default Books;