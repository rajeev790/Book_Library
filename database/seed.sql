-- Insert sample users
INSERT INTO users (full_name, email, password_hash, profile_picture) VALUES
('Alice Johnson', 'alice@example.com', 'hashed_password_1', 'alice.jpg'),
('Bob Smith', 'bob@example.com', 'hashed_password_2', 'bob.jpg');

-- Insert sample books
INSERT INTO books (title, author, description, publication_date, language, genre, cover_image) VALUES
('Effective Java', 'Joshua Bloch', 'A comprehensive guide to Java programming.', '2018-01-11', 'English', 'Programming', 'effective_java.jpg'),
('Learning Python', 'Mark Lutz', 'A guide to learning Python programming.', '2013-06-04', 'English', 'Programming', 'learning_python.jpg');

-- Insert sample ratings
INSERT INTO ratings (user_id, book_id, rating) VALUES
(1, 1, 5),
(2, 2, 4);

-- Insert sample reviews
INSERT INTO reviews (user_id, book_id, review) VALUES
(1, 1, 'An excellent book for Java developers.'),
(2, 2, 'Great for beginners in Python.');

-- Insert sample reading history
INSERT INTO reading_history (user_id, book_id, read_at) VALUES
(1, 1, '2024-09-01 10:00:00'),
(2, 2, '2024-09-02 15:30:00');
