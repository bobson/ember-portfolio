import Component from '@glimmer/component';
import { action } from '@ember/object';
import { set } from '@ember/object';

export default class ContactComponent extends Component {
  // Modal visibility flag
  isModalOpen: boolean = false;

  // Action to toggle modal visibility
  @action
  toggleModal() {
    set(this, 'isModalOpen', !this.isModalOpen);
  }
  @action
  closeModal() {
    set(this, 'isModalOpen', false);
  }
}
