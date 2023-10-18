import introductionImg from './Style-Images/Home-reading-img.png'
import BestSeller1 from './Style-Images/BestSeller-1.png'
import BestSeller2 from './Style-Images/BestSeller-2.png'
import BestSeller3 from './Style-Images/BestSeller-3.png'
import BestSeller4 from './Style-Images/BestSeller-4.png'
import BestSeller5 from './Style-Images/BestSeller-5.png'


function HomePage() {
    return ( 
        <main>
            <section className="introduction-container">
                <div className="introduction">
                    <h2 className="header">Unfold a World of Stories at Book Club</h2>
                    <p className="introduction-text text">Dive into a world of literary exploration with Book Club. Search through a diverse range of titles, discover hidden gems, and curate your very own reading list. Whether you're an avid reader or embarking on a new literary journey, our platform provides the tools to enhance your reading experience. Welcome to our website, where your next favorite book awaits!</p>
                </div>
                <img className='introductionImg' src={introductionImg} alt="introductionImg" />
            </section>

            <section>
                <div className='header-container'>
                    <h2 className='header'>Best Sellers 2023</h2>
                </div>

                <div className="bestSeller-container">
                    <div className="book-card">
                        <h2 className='subHeading'>#1</h2>
                        <img className='bestSellerImg' src={BestSeller1} alt="BestSeller-1" />
                        <h4 className='book-heading'>Spare</h4>
                        <p className='text'>Prince Harry <br />The Duke of Sussex</p>
                    </div>

                    <div className="book-card">
                        <h2 className='subHeading'>#2</h2>
                        <img className='bestSellerImg' src={BestSeller2} alt="BestSeller-2" />
                        <h4>Atomic Habits</h4>
                        <p className='text'>James Clear</p>
                    </div>

                    <div className="book-card">
                        <h2 className='subHeading'>#3</h2>
                        <img className='bestSellerImg' src={BestSeller3} alt="BestSeller-3" />
                        <h4>Lessons in Chemistry</h4>
                        <p className='text'>Bonnie Garmus</p>
                    </div>

                    <div className="book-card">
                        <h2 className='subHeading'>#4</h2>
                        <img className='bestSellerImg' src={BestSeller4} alt="BestSeller-4" />
                        <h4>It Starts with Us</h4>
                        <p className='text'>Collen Hoover</p>
                    </div>

                    <div className="book-card">
                        <h2 className='subHeading'>#5</h2>
                        <img className='bestSellerImg' src={BestSeller5} alt="BestSeller-4" />
                        <h4>It Ends with Us</h4>
                        <p className='text'>Collen Hoover</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;