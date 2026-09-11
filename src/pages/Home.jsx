import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <div className="hero-content">
        <p className="hero-label">
          WELCOME TO
        </p>

        <h1>Paradise Nursery</h1>

        <p className="hero-description">
          Bring nature into your home with beautiful,
          healthy and carefully selected plants.
        </p>

        <Link to="/plants">
          <button className="get-started">
            Get Started
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Home;