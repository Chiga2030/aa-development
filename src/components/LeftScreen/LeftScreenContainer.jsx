import {
  connect,
} from 'react-redux';

import LeftScreen from './LeftScreen';


const LeftScreenContainer = props => (
  <LeftScreen
    projects={ props.projects }
  />
);


export default connect(
  state => ({
    projects: state.projectsReducer,
  }),
)(LeftScreenContainer);
