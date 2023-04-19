import Header from '../component/header/Header';

const PostPage = () => {
  return (
    <>
      <Header />
      <main>
        포스트page
        <section className='post'>
          <section>post</section>
          <section>comment</section>
          <section>commentwrite</section>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default PostPage;
