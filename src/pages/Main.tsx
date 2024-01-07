import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main">
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
};

export default Main;
