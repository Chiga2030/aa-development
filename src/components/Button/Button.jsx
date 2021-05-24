import styles from './Button.module.css';

const Button = props => (
  <div className={`${styles.buttonWrapper} ${props.className}`}>
    <input
      className={styles.button}
      type="button"
      value={props.value}
    />
  </div>
);

export default Button;
