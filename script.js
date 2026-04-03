let cpfCadastrados = [
    "111.111.111-11",
    "111.222.333-22",
    "222.222.222-22",
    "333.333.333-33"
];

document.getElementById("form_adocao").addEventListener("submit", function(e) {

    // testar idade
    let idade = document.getElementById("idade").value;
    if (idade < 18) {
        e.preventDefault(); 
        alert("Você precisa ter 18 anos ou mais para se candidatar à adoção.");
    }

    // testar motivo

    console.log("motivo [" + document.getElementById("motivo").value + "]");
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

    // testar tempo sozinho
    let horas = document.getElementById("horas").value;
    if (horas > 8) {
        e.preventDefault();
        alert("Você não pode deixar um animal por mais de 8 horas sozinho.");
    }

    // testar se já teve pet
    let teve_pet_nao = document.getElementById("teve_pet_nao").checked;
    if (teve_pet_nao) {
        // e.preventDefault();
        alert("Poderá haver acompanhamento da ONG");
    }

    // testar se já tem o cpf
    let cpf = document.getElementById("cpf").value;
    if (cpfCadastrados.includes(cpf)) {
        e.preventDefault();
        alert("Esse CPF já está cadastrado no sistema.");
    }
});


function verificarMoradia() {
    let moradia = document.getElementById("moradia");
    let permiteAnimais = document.getElementById("permite_animais");
    let quintalSeguro = document.getElementById("quintal_seguro");
    let temQuintal = document.getElementById("tem_quintal");

    if (moradia.value === "Apartamento") {
        permiteAnimais.style.display = "block"; 
        quintalSeguro.style.display = "none";

        temQuintal.disabled = true;

    } else if (moradia.value === "Casa") {
        permiteAnimais.style.display = "none"; 
        quintalSeguro.style.display = "block";

        temQuintal.disabled = false;

    } else {
        permiteAnimais.style.display = "none"; 
        quintalSeguro.style.display = "none";
        temQuintal.disabled = true;

    }
}

function verificarSeTemQuintal() {
   let temQuintal = document.getElementById("tem_quintal_sim").checked;
   let quintalSeguro = document.getElementById("quintal_seguro");
   if (temQuintal) {
        quintalSeguro.disabled = false;
   } else {
        quintalSeguro.disabled = true;
   }
}

verificarMoradia();
verificarSeTemQuintal();
