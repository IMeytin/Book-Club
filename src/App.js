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

function App() {
  return (
    
    <Router>
      <NavBar />

      <Routes>
        <Route path='/' element={ <HomePage /> }></Route>
        <Route path='/Books' element={ <Books /> }></Route>
        <Route path='/ReadingList' element={ <ReadingList /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
