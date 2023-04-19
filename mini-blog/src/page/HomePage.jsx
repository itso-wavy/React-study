// import Button from '../component/common/Button';
import Header from '../component/header/Header';

const MainPage = () => {
  return (
    <>
      <Header type='home' />
      <main>
        <section className='pagelist'></section>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </>

    // <div>
    //   <nav>
    //     <h1>logo</h1>
    //     <ul>
    //       <li>list1</li>
    //       <li>list2</li>
    //       <li>list3</li>
    //     </ul>
    //   </nav>

    //   <Button
    //     title='메롱'
    //     onClick={() => {
    //       console.log(1);
    //     }}
    //   />
    // </div>
  );
};

export default MainPage;
