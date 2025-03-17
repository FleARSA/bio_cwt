import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout; 