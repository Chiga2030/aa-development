import {
  connect,
} from 'react-redux';

import ProjectsPage from './ProjectsPage';


const ProjectsPageContainer = props => (
  <ProjectsPage
    projects={ props.projects }
  />
);


export default connect(
  state => ({
    projects: state.projectsReducer,
  }),
)(ProjectsPageContainer);
