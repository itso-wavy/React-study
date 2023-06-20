import DeliciousMeals from '../../assets/img/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = ({ onClick }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onClick} />
      </header>
      <div className={classes['main-image']}>
        <img src={DeliciousMeals} alt='Delicious meals' />
      </div>
    </>
  );
};

export default Header;
