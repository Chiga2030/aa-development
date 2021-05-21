import styles from './LeftScreen.module.css';

const title = (<h2>Проекты:</h2>);

const LeftScreen = () => (
  <div className={styles.leftScreen}>
  {title}
  </div>
)

export default LeftScreen;
