import classNames from 'classnames';

import styles from './Bullets.module.css';

const Bullets = () => (
  <div className={styles.bulletsWrapper}>
    <span className={classNames(styles.bullet, styles.active)}></span>
    <span className={styles.bullet}></span>
    <span className={styles.bullet}></span>
    <span className={styles.bullet}></span>
    <span className={styles.bullet}></span>
  </div>
);

export default Bullets;
