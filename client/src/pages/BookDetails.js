import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookDetails.css';

const BookDetails = ({ match }) => {
  const [book, setBook] = useState(null);
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');

  useEffect(() => {
    async function fetchBook() {
      const bookId = match.params.id;
      const response = await axios.get(`/api/books/${bookId}`);
      setBook(response.data);
    }
    fetchBook();
  }, [match.params.id]);

  const handleRatingSubmit = async () => {
    await axios.post(`/api/books/${userId}/rate/${book.id}`, { rating });
    // Handle successful rating submission
  };

  const handleReviewSubmit = async () => {
    await axios.post(`/api/books/${userId}/review/${book.id}`, { review });
    // Handle successful review submission
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <h3>Average Rating: {book.average_rating}</h3>
      <h2>Rate this book</h2>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleRatingSubmit}>Submit Rating</button>
      <h2>Write a Review</h2>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button onClick={handleReviewSubmit}>Submit Review</button>
    </div>
  );
};

export default BookDetails;
