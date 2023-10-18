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
import { useState } from 'react';

function App() {
  const [likedBooks, setLikedBooks] = useState([]);

  return (
    <Router>
      <NavBar />

      <LikedBooksContext.Provider value={{likedBooks, setLikedBooks}}>
        <Routes>
          <Route path='/' element={ <HomePage /> }></Route>
          <Route path='/Books' element={ <Books /> }></Route>
          <Route path='/ReadingList' element={ <ReadingList /> }></Route>
        </Routes>
      </LikedBooksContext.Provider>
    </Router>
  );
}

export default App;
