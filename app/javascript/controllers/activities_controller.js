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
        activityDescription.innerText = "Nos trois vétérinaires consultent sur rendez-vous du lundi au samedi. Chat ou chien, nous réservons le meilleur accueil à votre compagnon!";
        imgActive.classList.toggle("img-active");
        imgConsultation.classList.toggle("img-active");
        break;
      case "image":
        activityTitle.innerText = "Imagerie médicale";
        activityDescription.innerText = "Nous sommes équipés d'un appareil de radiologie et d'un échographe.";
        imgActive.classList.toggle("img-active");
        imgImage.classList.toggle("img-active");
        break;
      case "analysis":
        activityTitle.innerText = "Analyse sanguine";
        activityDescription.innerText = "Nous pouvons réaliser sur place des analyses biochimiques et hématologiques.";
        imgActive.classList.toggle("img-active");
        imgAnalysis.classList.toggle("img-active");
        break;
      case "surgery":
        activityTitle.innerText = "Chirurgie";
        activityDescription.innerText = "Avec deux postes de chirurgie tout équipés, nous assurons tous les actes de chirurgie générale.";
        imgActive.classList.toggle("img-active");
        imgSurgery.classList.toggle("img-active");
        break;
      case "hospital":
        activityTitle.innerText = "Hospitalisation";
        activityDescription.innerText = "Parce que le confort de vos animaux nous tient à coeur, les chats et chiens hospitalisés bénéficient tous d'un box individuel. Pour les chats, la cage est adaptée avec box et litière séparés.";
        imgActive.classList.toggle("img-active");
        imgHospital.classList.toggle("img-active");
        break;
      case "food":
        activityTitle.innerText = "Alimentation spécialisée";
        activityDescription.innerText = "Nous servons de point de livraison Chronovet: vous pouvez commander la nourriture de votre animal sur le site chronovet.fr et récupérer votre commande à l'accueil de la clinique.";
        imgActive.classList.toggle("img-active");
        imgFood.classList.toggle("img-active");
        break;

      default:
        break;
    }
  }
}
