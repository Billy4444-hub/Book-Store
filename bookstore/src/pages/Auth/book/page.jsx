import React, { use } from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom'
import './page.css'
import Navbar from '../../../components/Navbar'

import book1 from '../../../assets/book1.webp'
import book2 from '../../../assets/book2.webp'
import book3 from '../../../assets/book3.webp'
import book4 from '../../../assets/book4.webp'

let temp = [
  { _id: "1", title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: book1 },
  { _id: "2", title: "To Kill a Mockingbird", author: "Harper Lee", image: book2 },
  { _id: "3", title: "1984", author: "George Orwell", image: book3 },
  { _id: "4", title: "Pride and Prejudice", author: "Jane Austen", image: book4 },
];

function page() {

  const navigate = useNavigate();
  const { bookid } = useParams();
  const [book, setBook] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const foundBook = temp.find((b) => b._id === bookid);
    setBook(foundBook);
    }, [bookid]);

    if (!book) {
        return <div>Loading...</div>;
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