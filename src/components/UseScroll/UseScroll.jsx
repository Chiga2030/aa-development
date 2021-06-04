import styles from './UseScroll.module.css';
import mouse from './img/mouse.svg';

import classNames from 'classnames';

import BulletsContainer from '../Bullets/BulletsContainer';


const UseScroll = () => (
  <div className={styles.wrapper}>
    <img
      className={classNames(styles.mouse, styles.marginBottom)}
      src={mouse}
      alt="computer mouse" />
    <small
      className={
        classNames(
          styles.smallText,
          styles.marginBottom
        )
      }
    >
      use scroll
    </small>
    <BulletsContainer />
  </div>
);

export default UseScroll;
