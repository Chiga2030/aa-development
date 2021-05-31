import styles from './LinkList.module.css';

import classNames from 'classnames';

const LinkList = props => (
  <ul className={ classNames(styles.linkList, props.className) }>
    <li className={ styles.listItem }>
      <a className={ styles.link } href="#">Ссылка на проект</a>
    </li>
    <li className={ styles.listItem }>
      <a className={ styles.link } href="#">Репозиторий на Github</a>
    </li>
  </ul>
);

export default LinkList;
