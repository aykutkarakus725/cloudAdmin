import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import BookList from './pages/BookList';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="booklist" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
