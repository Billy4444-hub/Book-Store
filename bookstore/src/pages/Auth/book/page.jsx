import React, { use } from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom'
import './page.css'
import Navbar from '../../../components/Navbar'

const apiUrl = import.meta.env.VITE_BACKEND_URL;

function page() {

  const navigate = useNavigate();
  const { bookid } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/books/${bookid}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch book details');
                }
                const data = await response.json();
                setBook(data);
                setLoading(false);
            }
            catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchBookDetails();
     }, []);

        if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
  
    if(location.pathname === `/book/${bookid}`){
        return (
     <div className= "main">
            <Navbar />
            <div className= "container">
                <div className= "imageContainer">
                    <img src={book.image} alt={book.title} className= "BookImage" />
                </div>
                <div className= "details" >
                    <h1 className= "BookTitle">{book.title}</h1>
                    <p className= "BookAuthor">by {book.author}</p>
                    <div
                        className= "BookDescription"
                        dangerouslySetInnerHTML={{ __html: book.description }}
                    />

                    <p className= "BookPrice" >{book.price}</p>

                    <button className= "purchaseButton"
                        onClick={() => {
                               // add payment check here


                                // assuming already paid
                            navigate(`/read/${bookid}`)
                        }}
                    >Start Reading</button>

                    <button className= "purchaseButton">Buy on Amazon</button>

                </div>
            </div>

        </div>
  )
}
  return <Outlet />;
}

export default page