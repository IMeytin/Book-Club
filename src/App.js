import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavBar from './NavBar';
import HomePage from './HomePage';
import Books from './Books';
import ReadingList from './ReadingList';
import LikedBooksContext from './LikedBooksContext';
import { useEffect, useState } from 'react';

function App() {
  const savedLikedBooks = JSON.parse(localStorage.getItem('likedBooks'))
  const [likedBooks, setLikedBooks] = useState(savedLikedBooks || []);
  console.log(likedBooks)

  useEffect(()=> {
    localStorage.setItem('likedBooks', JSON.stringify(likedBooks))
  }, [likedBooks])

  return (
    <LikedBooksContext.Provider value={{likedBooks, setLikedBooks}}>
      <Router>
        <NavBar />
    
          <Routes>
            <Route path='/' element={ <HomePage /> }></Route>
            <Route path='/Books' element={ <Books /> }></Route>
            <Route path='/ReadingList' element={ <ReadingList /> }></Route>
          </Routes>
      </Router>
    </LikedBooksContext.Provider>
  );
}

export default App;
