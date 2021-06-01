import styles from './Title.module.css';

import classNames from 'classnames';

const Title = props => {
  const style = classNames(
    styles.title,
    styles[props.extraClassName],
  );

  const value = () => {
    if (props.value) {
      return props.value;
    } return 'title';
  };

  return (
    <h2 className = { style }>
      { value() }
    </h2>
  );
};

export default Title;
