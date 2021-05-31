import Title from '../Title/Title';
import ProjectItem from '../ProjectItem/ProjectItem';
import UseScroll from '../UseScroll/UseScroll';

import styles from './LeftScreen.module.css';

const LeftScreen = props => {
  console.log(props.projects.items);
  return (
    <div className={styles.leftScreen}>
      <div className = {styles.leftScreenInner}>
        <Title
          value = {'Проекты:'}
          extraClassName = {'toCenter'}
        />
        <ProjectItem />
        <UseScroll amountBullest = { props.projects.items } />
      </div>
    </div>
  );
};

export default LeftScreen;
