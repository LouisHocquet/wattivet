import { Controller } from "@hotwired/stimulus"
const imgConsultation = document.getElementById("img-consultation");
const imgImage = document.getElementById("img-image");
const imgAnalysis = document.getElementById("img-analysis");
const imgSurgery = document.getElementById("img-surgery");
const imgHospital = document.getElementById("img-hospital");
const imgFood = document.getElementById("img-food");


// Connects to data-controller="activities"
export default class extends Controller {
  static targets = ["activityElement"]
  static values = {
    type : String
  }
  connect() {
    console.log("hello from activities_controller.js");
  }
  toggle(event) {
    const activity = event.currentTarget.dataset.activity;
    const activityNode = this.activityElementTarget;
    // const activityPictures = activityNode.querySelectorAll('img');
    const activityTitle = activityNode.querySelector('h3');
    const activityDescription = activityNode.querySelector('p');
    const imgActive = document.querySelector(".img-active");
    const pillActive = document.querySelector(".activity-active");
    pillActive.classList.toggle("activity-active");
    event.currentTarget.classList.toggle("activity-active");

    switch (activity) {
      case "consultation":
        activityTitle.innerText = "Consultation";
        activityDescription.innerText = "Texte consultation à définir";
        imgActive.classList.toggle("img-active");
        imgConsultation.classList.toggle("img-active");
        break;
      case "image":
        activityTitle.innerText = "Imagerie médicale";
        activityDescription.innerText = "Texte imagerie médicale";
        imgActive.classList.toggle("img-active");
        imgImage.classList.toggle("img-active");
        break;
      case "analysis":
        activityTitle.innerText = "Analyse sanguine";
        activityDescription.innerText = "Texte analyse Sanguine";
        imgActive.classList.toggle("img-active");
        imgAnalysis.classList.toggle("img-active");
        break;
      case "surgery":
        activityTitle.innerText = "Chirurgie";
        activityDescription.innerText = "Texte chirurgie";
        imgActive.classList.toggle("img-active");
        imgSurgery.classList.toggle("img-active");
        break;
      case "hospital":
        activityTitle.innerText = "Hospitalisation";
        activityDescription.innerText = "Texte hospitalisation";
        imgActive.classList.toggle("img-active");
        imgHospital.classList.toggle("img-active");
        break;
      case "food":
        activityTitle.innerText = "Alimentation spécialisée";
        activityDescription.innerText = "Texte alimentation spécialisée";
        imgActive.classList.toggle("img-active");
        imgFood.classList.toggle("img-active");
        break;

      default:
        break;
    }
  }
}
