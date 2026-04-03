document.getElementById("form_adocao").addEventListener("submit", function(e) {

    let idade = document.getElementById("idade").value;
    if (idade < 18) {
        e.preventDefault(); 
        alert("Você precisa ter 18 anos ou mais para se candidatar à adoção.");
    }
});

function verificarMoradia() {
    let moradia = document.getElementById("moradia");
    let permiteAnimais = document.getElementById("permite_animais");
    let quintalSeguro = document.getElementById("quintal_seguro");

    if (moradia.value === "Apartamento") {
        permiteAnimais.style.display = "block"; 
        quintalSeguro.style.display = "none";
    } else if (moradia.value === "Casa") {
        permiteAnimais.style.display = "none"; 
        quintalSeguro.style.display = "block";
    } else {
        permiteAnimais.style.display = "none"; 
        quintalSeguro.style.display = "none";
    }
}

document.getElementById("form_adocao").addEventListener("submit", function(e) {

    let horas = document.getElementById("horas").value;
    if (horas > 8) {
        e.preventDefault();
        alert("Você não pode deixar um animal por mais de 8 horas sozinho.");
    }
})
