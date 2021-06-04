import styles from './SplitScreen.module.css';
import LeftScreen from '../LeftScreen/LeftScreen';

const SplitScreen = props => (
  <div className={styles.splitScreen}>
    <LeftScreen
      projects={ props.projects }
    />
    <div className={styles.rightScreen}></div>
  </div>
);

export default SplitScreen;
