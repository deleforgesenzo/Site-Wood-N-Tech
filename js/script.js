const form = document.getElementById('monFormulaire');
const btn = document.getElementById('submitBtn');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // empêche le rechargement de la page

  const prenom = form.prenom.value.trim();
  const nom = form.nom.value.trim();
  const email = form.email.value.trim();
  const numero = form.numero.value.trim();
  const message = form.message.value.trim();

  // Vérification si le formulaire est vide
  if (!prenom || !nom || !email || !numero || !message) {
    const originalText = btn.textContent;
    const originalColor = btn.style.backgroundColor;

    // Changement du bouton pour indiquer l'erreur
    btn.textContent = "Formulaire incomplet !";
    btn.style.backgroundColor = "#C04000"; // rouge
    btn.disabled = true; // désactive le bouton

    // Remettre le bouton à l'état normal après 2 secondes
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.backgroundColor = originalColor || "#CEB78F";
      btn.disabled = false; // réactive le bouton
    }, 2500);

    return; // stop ici pour ne pas traiter l'envoi
  }

  // Si tout est rempli : changement pour succès
  const originalText = btn.textContent;
  const originalColor = btn.style.backgroundColor;

  btn.textContent = "Message envoyé";
  btn.style.backgroundColor = "#3DBAEC";

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.backgroundColor = originalColor;
  }, 2500);

  // Ici tu peux envoyer le formulaire via AJAX ou fetch si tu veux
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  burger.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
    burger.classList.toggle("open");
  });
});