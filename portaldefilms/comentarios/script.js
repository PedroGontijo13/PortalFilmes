function sProfile () {
    let obj = (JSON.parse(this.responseText));
    let texto = (`
    <div class="card1" style="width: 18rem;">
        <img class="card-img-top" src="${obj.avatar_url}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${obj.name}</h5>
            <p class="p2">${obj.bio}</p>
            <a href="https://github.com/PedroGontijo13" class="btn btn-primary">GitHub</a>
        </div>
    </div>`);
    document.getElementById('tela').innerHTML = texto;
} 

function Profile () {
    var xhr = new XMLHttpRequest();
    xhr.onload = sProfile;
    xhr.open('GET', 'https://api.github.com/users/PedroGontijo13');
    xhr.send();
}

function comentsareaBox(title, desc) {
    this.title = title;
    this.desc = desc;
}

let vagas = [];
let x, comentsarea, box;

//Garantir que hajam vagas ficticias postadas 

if (localStorage.getItem('Vagas') === null) {
    localStorage.setItem('Vagas', `[{"title":"Carlos","desc":"Otimo."}]`);
} else {
    console.log("local storage preenchido");
}

vagas = JSON.parse(localStorage.getItem("Vagas"));

function coments () {
    for (x = vagas.length - 1; x >= 0; x--) {

        comentsarea = document.getElementById('comentsarea');

        box = `
        <div class="card row col-12">
            <div class="card-body">
                <h5>${vagas[x].title}</h5>
                <p>${vagas[x].desc}</p>
            </div>
        </div>`;

        comentsarea.innerHTML += box;
    }

    register.onsubmit = (e) => {

        if (titleForm.value.length == 0 ||
             descForm.value.length == 0 ) {

            instruction.classList.add("erro");
            instruction.innerHTML = "Preencha todos os campos";
            console.log("erro");

        } else {

            let info = new comentsareaBox(titleForm.value, descForm.value);

            vagas[vagas.length] = info;
            instruction.innerHTML = "";
            instruction.classList.remove("erro");

            localStorage.setItem('Vagas', JSON.stringify(vagas));

            comentsarea = document.getElementById('comentsarea');

            box = `
            <div class="card col-12">
                <div class="card-body">
                    <h5>${vagas[vagas.length - 1].title}</h5>
                    <p>${vagas[vagas.length - 1].desc}</p>
                </div>
            </div>
            `;

            comentsarea.innerHTML += box;

            titleForm.value = "";
            descForm.value = "";
        }
        e.preventDefault();
    }
}

window.onload = () => {
    Profile ();
    coments();
}