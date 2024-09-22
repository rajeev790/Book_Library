-- Indexes for better performance
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_book_title ON books(title);
CREATE INDEX idx_rating_user_book ON ratings(user_id, book_id);
CREATE INDEX idx_review_user_book ON reviews(user_id, book_id);
CREATE INDEX idx_reading_history_user_book ON reading_history(user_id, book_id);
