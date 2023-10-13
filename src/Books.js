import bookImg from "./Style-Images/BookImg.png"
function Books() {
    
    return ( 
        <main>
            <div className="book-section-header">
                <img src={bookImg} alt="book" width={100}/>
                <h2 className="header">Find Your Next Literary Adventure</h2>
                <img src={bookImg} alt="book" width={100}/>
            </div>
            <form>
                <input className="search-input" type="text" />
                <button className="btn"><span className="material-icons-outlined">search</span></button>
            </form>


            <section>
                <h2>BOOK list</h2>
            </section>
        </main>
    );
}

export default Books;