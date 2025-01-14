// app/components/footer.ts
import Component from '@glimmer/component';

export default class Footer extends Component {
  currentYear = new Date().getFullYear();
  scrollToTop() {
    window.scrollTo({
      top: document.getElementById('hero')!.offsetTop,
      behavior: 'smooth',
    });
  }
}
