let cpfCadastrados = [
    "111.111.111-11",
    "111.222.333-22",
    "222.222.222-22",
    "333.333.333-33"
];


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

    let motivo = document.getElementById("motivo").value.trim().toLowerCase();

    let motivosGenericos = [
        "quero",
        "porque sim",
        "sei la",
        "seila",
        "nao sei",
        "porque eu quero"
    ];

    if (motivosGenericos.includes(motivo)) {
        e.preventDefault();
        alert("O motivo da adoção não pode ser genérico. Explique melhor seu motivo.");
    }
});

document.getElementById("form_adocao").addEventListener("submit", function(e) {
     
        let horas = document.getElementById("horas").value;

        if (horas > 8) {
        e.preventDefault();
        alert("Você não pode deixar um animal por mais de 8 horas sozinho.");
    }
});

document.getElementById("form_adocao").addEventListener("submit", function(e) {

    let teve_pet = document.getElementById("teve_pet").value;

    if (teve_pet === "nao") {
        e.preventDefault();
        alert("Poderá haver acompanhamento da ONG");
    }
});

document.getElementById("form_adocao").addEventListener("submit", function(e) {

    let cpfCadastrados = document.getElementById("cpf").value;

    if (cpfCadastrados.includes(cpf)) {
        e.preventDefault();
        alert("Esse CPF já está cadastrado no sistema.");
    }
});