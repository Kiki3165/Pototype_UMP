// JavaScript pour afficher la date actuelle dans le pied de page
const currentDateElement = document.getElementById("currentDate");
const currentDate = new Date();
const options = { year: "numeric", month: "long", day: "numeric" };
currentDateElement.textContent = "Date : " + currentDate.toLocaleDateString("fr-FR", options);