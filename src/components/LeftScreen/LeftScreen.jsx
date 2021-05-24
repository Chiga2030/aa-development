import Title from '../Title/Title';
import ProjectItem from '../ProjectItem/ProjectItem';

import styles from './LeftScreen.module.css';

const LeftScreen = () => (
  <div className={styles.leftScreen}>
    <div className = {styles.leftScreenInner}>
      <Title
        value = {'Проекты:'}
        extraClassName = {'toCenter'}
      />
      <ProjectItem />
    </div>
  </div>
)

export default LeftScreen;
