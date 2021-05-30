import styles from './SplitScreen.module.css';
import LeftScreenContainer from '../LeftScreen/LeftScreenContainer';

const SplitScreen = () => (
  <div className={styles.splitScreen}>
    <LeftScreenContainer />
    <div className={styles.rightScreen}></div>
  </div>
);

export default SplitScreen;
