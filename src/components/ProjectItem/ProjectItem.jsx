import Button from '../Button/Button';
import LinkList from '../LinkList/LinkList';
import UseScroll from '../UseScroll/UseScroll';

import styles from './ProjectItem.module.css';

const ProjectItem = () => (
  <div className={styles.wrapper}>
    <h3 className={styles.title}>Chat bot</h3>
    <p className={styles.subtitle}>Учебное приложение на Node.js, JS, HTML</p>

    <LinkList className={styles.linkList} />

    <Button
      className={styles.button}
      value="Подробнее"
    />

    <UseScroll />
  </div>
);

export default ProjectItem;
