import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="carousel"
export default class extends Controller {
  static targets = ["pictureContainer", "stepperContainer"]
  connect() {
    // console.log("Hello from carousel controller");
    // console.log(this.pictureContainerTarget.children);
  }
  back() {
    this.toggle(4);
  }
  forward() {
    this.toggle(1);
  }
  toggle(x=0) {
    let i = 0;
    let j = 0;
    const pictures = this.pictureContainerTarget.children;
    const steps = this.stepperContainerTarget.children;
    const c = pictures.length;
    for (let i = 0; i < c; i++) {
      if (pictures[i].classList.contains("active-picture")) {
        j = (i + x) % c;

        pictures[i].classList.toggle("active-picture");
        pictures[j].classList.toggle("active-picture");
        steps[i].classList.toggle("active-step");
        steps[j].classList.toggle("active-step");
        break;
      }
    }
  }
}
