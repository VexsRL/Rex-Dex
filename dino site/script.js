function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function validerFormulaire() { // Sers a vérifier si le formulaire est correctement rempli
    if (document.getElementById("accepteConditions").checked) {
        document.getElementById("monFormulaire").reset();
        return false; // Retourne false pour annuler la soumission du formulaire.
    } else {
        alert("Please accept the TOS and Confidentiality policy.");
        return false;
    }
}

function viderChamps() {
    document.getElementById("monFormulaire").reset(); // Sers à vider les champs lors de la soumission du formulaire
}

// Affiche les libellés quand un champ de saisie est en focus
document.querySelectorAll('input, textarea, select').forEach(function (element) {
    element.addEventListener('focus', function () {
        var labelId = 'label' + element.id.charAt(0).toUpperCase() + element.id.slice(1);
        var labelElement = document.getElementById(labelId);
        if (labelElement) {
            labelElement.classList.remove('hidden');
        }
    });

    element.addEventListener('blur', function () {
        var labelId = 'label' + element.id.charAt(0).toUpperCase() + element.id.slice(1);
        var labelElement = document.getElementById(labelId);
        if (labelElement && element.value === '') {
            labelElement.classList.add('hidden');
        }
    });
});