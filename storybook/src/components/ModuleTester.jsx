import styles from '../styles/ModuleTester.module.scss';

const ModuleTester = () => {
  return (
    <p className={styles.tit}>
      CSS Module은 css 코드를 js 객체로 변환하고 각 파일별로 독립적인
      classname을 부여합니다.
    </p>
  );
};

export default ModuleTester;
