import styles from './SplitScreen.module.css';
import LeftScreen from '../LeftScreen/LeftScreen';

const SplitScreen = () => (
  <div className={styles.splitScreen}>
    <LeftScreen />
    <div className={styles.rightScreen}></div>
  </div>
);

export default SplitScreen;
