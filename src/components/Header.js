// Header.js
import { Link } from 'react-router-dom';

const Header = () => 
<header>
<nav>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard Page</Link>
        </li>
        <li>
          <Link to="/blogs">Blog Post</Link>
        </li>
      </ul>
    </nav>   
</header>;
export default Header;

