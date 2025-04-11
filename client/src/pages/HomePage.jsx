import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the custom CSS

const HomePage = () => {
  const news = [
    { title: 'Latest Tech Trends in 2025', id: 1 },
    { title: 'AI and the Future of Jobs', id: 2 },
    { title: 'The Rise of Electric Vehicles', id: 3 },
  ];

  return (
    <div className="home-page">
      <header className="hero">
        <h1>Welcome to Tekly</h1>
        <p>Your daily dose of technology news</p>
      </header>

      <section className="news">
        <h2>Recent News</h2>
        <div className="news-list">
          {news.map((article) => (
            <div className="news-item" key={article.id}>
              <h3>
                <Link to={`/news/${article.id}`}>{article.title}</Link>
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter and never miss the latest news!</p>
        <form>
          <input type="email" placeholder="Your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;
