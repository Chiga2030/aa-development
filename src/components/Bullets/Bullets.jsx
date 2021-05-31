// import classNames from 'classnames';

import styles from './Bullets.module.css';

const Bullets = props => {
  console.log(props.amountBullest);

  return (
    <div className={styles.bulletsWrapper}>
      { props.amountBullest.map(
        item => (
          <span
            key={ item.id.toString() }
            className={ styles.bullet }
          />
        )
      ) }
    </div>
  );
};


export default Bullets;
