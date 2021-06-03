import {
  connect,
} from 'react-redux';

import Bullets from './Bullets';


const BulletsContainer = props => (
  <Bullets
    items={ props.items }
  />
);


export default connect(
  state => ({
    items: state.projectsReducer.items,
  }),
)(BulletsContainer);
