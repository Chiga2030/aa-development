import mappedItems from '../../utils/mappedItems';

import styles from './Bullets.module.css';

const Bullets = props => {
  const bullet = item => (
    <span
      key={ item.id.toString() }
      className={ styles.bullet }
    />
  );

  if (props.items) {
    return (
      <div className={styles.bulletsWrapper}>
        {
          mappedItems(props.items, bullet)
        }
      </div>
    );
  } return 'loading...';
};


export default Bullets;
