import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="menu"
export default class extends Controller {
  static targets = ["mobileMenuContainer"];
  connect() {
  }
  toggle() {
    this.mobileMenuContainerTarget.classList.toggle("menu-container-mobile-active");
    this.toggleScrolling();
  }
  toggleScrolling () {
    document.body.classList.toggle("disable-scrolling");
  }
}
