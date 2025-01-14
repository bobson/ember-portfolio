import Component from '@glimmer/component';

export default class HeroImageComponent extends Component {
  goToIntroSection() {
    window.scrollTo({
      top: document.getElementById('intro')!.offsetTop,
      behavior: 'smooth',
    });
  }
}
