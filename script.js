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

    if (moradia.value === "Apartamento") {
        permiteAnimais.style.display = "block"; 
    } else {
        permiteAnimais.style.display = "none";  
    }
}



