import styles from './Title.module.css';

const Title = props => (
  <h2 className = {`${styles.title} ${styles[props.extraClassName]}`}>
    {props.value}
  </h2>
);

export default Title;
