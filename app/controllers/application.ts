import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  currentYear = new Date().getFullYear();

  networks = [
    { id: 1, name: 'github', url: 'https://github.com/bobson' },
    { id: 2, name: 'linkedin', url: 'https://linkedin.com/in/bobson' },
    { id: 3, name: 'twitter', url: 'https://twitter.com/bobson' },
  ];

  isGithubButtonsEnabled = true; // Set this based on your requirements
}
