import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to='/products'>the list of products</Link>.
      </p>
      <p>
        please <Link to='/auth'>Login</Link> or{' '}
        <Link to='/auth/register'>Register</Link>
      </p>
    </>
  );
}

export default HomePage;
