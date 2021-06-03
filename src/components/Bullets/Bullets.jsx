import styles from './Bullets.module.css';

const Bullets = props => (
  <div className={styles.bulletsWrapper}>
    {
      props.items.map(
        item => (
          <span
            key={ item.id.toString() }
            className={ styles.bullet }
          />
        )
      )
    }
  </div>
);


export default Bullets;
