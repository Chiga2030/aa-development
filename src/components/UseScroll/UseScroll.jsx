import classNames from 'classnames';

import mouse from './img/mouse.svg';

import Bullets from '../Bullets/Bullets';

import styles from './UseScroll.module.css';

const UseScroll = () => (
  <div className={styles.wrapper}>
    <img
        className={classNames(styles.mouse, styles.marginBottom)}
        src={mouse}
        alt="computer mouse" />
    <small className={classNames(styles.smallText, styles.marginBottom)}>use scroll</small>
    <Bullets />
  </div>
);

export default UseScroll;
