import Title from '../Title/Title';

import styles from './LeftScreen.module.css';

const LeftScreen = () => (
  <div className={styles.leftScreen}>
    <div className = {styles.leftScreenInner}>
      <Title
        value = {'Проекты:'}
        extraClassName = {'toRigth'}
      />
    </div>
  </div>
)

export default LeftScreen;
