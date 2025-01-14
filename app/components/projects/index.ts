import Component from '@glimmer/component';
import { projectsData } from 'my-project/data/projects-data';
export default class ProjectsComponent extends Component {
  projects = projectsData;
}
