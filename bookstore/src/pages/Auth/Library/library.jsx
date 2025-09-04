import {React, useState, useEffect} from 'react'
import Navbar from '../../../components/Navbar'
import './library.css'  ;
import { FaBookOpen } from "react-icons/fa";
import { FaChevronRight, FaChevronDown } from "react-icons/fa6";
import { MdBook } from "react-icons/md";
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

function library() {
    const [show, setShow] = useState(false);
    const [allBooks, setAllBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/books/all`);
                if (!response.ok) {
                    throw new Error('Failed to fetch books');
                }
                const data = await response.json();
                setAllBooks(data);
                setLoading(false);
            }
            catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchBooks();

     }, []);

        if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
 
   const location = useLocation();

   if(location.pathname === '/library'){
     return (
    <div className='main'>
        <Navbar/>

         <div className= "row">
                <div className= "left">
                    <div className= "menuMain">
                        <FaBookOpen className= "bookicon" />
                        <p>Library</p>
                        {show ? (
                            <FaChevronDown
                                onClick={() => setShow(!show)}
                                className= "toRight"
                            />
                        ) : (
                            <FaChevronRight
                                onClick={() => setShow(!show)}
                                className= "toRight"
                            />
                        )}
                    </div>
                    {show && (
                        <div className= "menuItems">
                            <span>All Titles</span>
                            <span>Books</span>
                            <span>Comics</span>
                            <span>Samples</span>
                        </div>
                    )}
                    <div className= "menuMain">
                        <MdBook className= "bookicon2" />
                        <p>Notes & Highlights</p>
                    </div>
                </div>
                <div className= "right">
                    <h1>Trending</h1>
                    <div className= "books">
                        {allBooks.map((book) => (
                            <div
                                onClick={() => navigate(`/book/${book._id}`)}
                                key={book._id}
                                className= "bookItem"
                            >
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className= "bookImage"
                                />
                                <div className= "bookDetails">
                                    <h3 className= "bookTitle">{book.title}</h3>
                                    <p className= "bookAuthor">{book.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </div>
  )
}
 return <Outlet/>;
  
}

export default library