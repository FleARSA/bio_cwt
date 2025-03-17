import './pages.css';

const Home = () => {
  return (
    <>
      <div className="background-container">
        <div className="main-background"></div>
        <div className="woodgrain-overlay"></div>
      </div>
      <div className="page-wrapper">
        <div className="home">
          {/* Container to align the block to the right */}
          <div className="block-container">
            <div className="right-block"></div>
          </div>
          
          <div className="content-overlay">
            <h1>Welcome to Our Website</h1>
            <section className="hero">
              <h2>Your Trusted Partner</h2>
              <p>We provide exceptional services to meet your needs.</p>
            </section>
          </div>
          {/* Additional content sections */}
          <div className="content-overlay">
            <h2>Section 2</h2>
            <p>Additional content to demonstrate scrolling...</p>
          </div>
          <div className="content-overlay">
            <h2>Section 3</h2>
            <p>More content to ensure we have enough to scroll...</p>
          </div>
          <div className="content-overlay">
            <h2>Section 4</h2>
            <p>Even more content for scrolling demonstration...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home; 