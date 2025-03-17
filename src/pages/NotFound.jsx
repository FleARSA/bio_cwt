import { Link } from 'react-router-dom';
import './pages.css';

const NotFound = () => {
  return (
    <>
      <div className="background-container">
        <div className="main-background"></div>
      </div>
      <div className="not-found">
        <div className="content-overlay">
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <Link to="/">Return to Home</Link>
        </div>
      </div>
    </>
  );
};

export default NotFound; 