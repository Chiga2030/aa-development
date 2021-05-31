import styles from './UseScroll.module.css';
import mouse from './img/mouse.svg';

import classNames from 'classnames';

import Bullets from '../Bullets/Bullets';


const UseScroll = props => {
  console.log('props', props);
  return (
    <div className={styles.wrapper}>
      <img
        className={classNames(styles.mouse, styles.marginBottom)}
        src={mouse}
        alt="computer mouse" />
      <small
        className={ classNames(styles.smallText, styles.marginBottom) }
      >use scroll</small>
      <Bullets amountBullest = { props.amountBullest } />
    </div>
  );
};

export default UseScroll;
