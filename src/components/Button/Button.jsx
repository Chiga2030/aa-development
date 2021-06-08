import styles from './Button.module.css';

const Button = ({
  value,
  alignmentStyle,
}) => (
  <div className={`
    ${styles.buttonWrapper}
    ${alignmentStyle ? alignmentStyle : ''}
  `}>
    <input
      className={styles.button}
      type="button"
      value={value}
    />
  </div>
);

export default Button;
