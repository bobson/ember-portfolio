import Component from '@glimmer/component';

export default class IntroComponent extends Component {
  goToContactSection() {
    window.scrollTo({
      top: document.getElementById('contact')!.offsetTop,
      behavior: 'smooth',
    });
    // console.log('goToContactSection');
  }
}
