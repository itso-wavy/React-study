import useAxios from './hooks/useAxios';

const App = () => {
  const { loading, response, refetch } = useAxios({
    url: 'https://yts.mx/api/v2/list_movies.json',
  });

  return (
    <>
      <h1>{response && response.status}</h1>
      <h2>{loading && 'Loading'}</h2>
      <button onClick={refetch}>Refetch</button>
    </>
  );
};

export default App;
