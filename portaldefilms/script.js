function sAvengers () {
    let obj = (JSON.parse(this.responseText));
    let texto = (`
    
    <div class="col-12">
        <div class="card">
        <img class="card-img-top" src=https://image.tmdb.org/t/p/w500/${obj.backdrop_path} alt="Imagem de capa do card">
               <div class="card-body">
                   <div class="card-body">
            <h5 class="card-title">${obj.title}</h5>
            <p class="text-banner">${obj.overview}</p>
            <a href="${obj.homepage}" class="btn btn-primary">Ver mais</a>
        </div
              </div>
        </div>
    </div>`)
    document.getElementById('tela').innerHTML = texto;
} 

function Avengers () {
    var xhr = new XMLHttpRequest();
    xhr.onload = sAvengers;
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/299536?api_key=0f3fb72a7a6f467451fc6b155705be3d&language=pt-BR');
    xhr.send();
}

function sspiderMan () {
    let obj = (JSON.parse(this.responseText));
    let texto = (`
    
    <div class="col-12">
        <div class="card">
        <img class="card-img-top" src=https://image.tmdb.org/t/p/w500/${obj.backdrop_path} alt="Imagem de capa do card">
               <div class="card-body">
                   <div class="card-body">
            <h5 class="card-title">${obj.title}</h5>
            <p class="text-banner">${obj.overview}</p>
            <a href="${obj.homepage}" class="btn btn-primary">Ver mais</a>
        </div
              </div>
        </div>
    </div>`)
    document.getElementById('tela1').innerHTML = texto;
} 

function spiderMan () {
    var xhr = new XMLHttpRequest();
    xhr.onload = sspiderMan;
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/315635?api_key=0f3fb72a7a6f467451fc6b155705be3d&language=pt-BR');
    xhr.send();
}

function sAnnabelle () {
    let obj = (JSON.parse(this.responseText));
    let texto = (`
    <div class="col-12">
        <div class="card">
        <img class="card-img-top" src=https://image.tmdb.org/t/p/w500/${obj.backdrop_path} alt="Imagem de capa do card">
               <div class="card-body">
                   <div class="card-body">
            <h5 class="card-title">${obj.title}</h5>
            <p class="text-banner">${obj.overview}</p>
            <a href="${obj.homepage}" class="btn btn-primary">Ver mais</a>
        </div
              </div>
        </div>
    </div>`)
    document.getElementById('tela2').innerHTML = texto;
} 

function Annabelle () {
    var xhr = new XMLHttpRequest();
    xhr.onload = sAnnabelle;
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/250546?api_key=0f3fb72a7a6f467451fc6b155705be3d&language=pt-BR');
    xhr.send();
}

function sPoderosoChefao () {
    let obj = (JSON.parse(this.responseText));
    let texto = (`
    <div class="col-12">
        <div class="card">
        <img class="card-img-top" src=https://image.tmdb.org/t/p/w500/${obj.backdrop_path} alt="Imagem de capa do card">
               <div class="card-body">
                   <div class="card-body">
            <h5 class="card-title">${obj.title}</h5>
            <p class="text-banner">${obj.overview}</p>
            <a href="${obj.homepage}" class="btn btn-primary">Ver mais</a>
        </div
              </div>
        </div>
    </div>`)
    document.getElementById('tela3').innerHTML = texto;
} 

function PoderosoChefao () {
    var xhr = new XMLHttpRequest();
    xhr.onload = sPoderosoChefao;
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/238?api_key=0f3fb72a7a6f467451fc6b155705be3d&language=pt-BR');
    xhr.send();
}

function szeroZerosete () {
    let obj = (JSON.parse(this.responseText));
    let texto = (`
    <div class="col-12">
        <div class="card">
        <img class="card-img-top" src=https://image.tmdb.org/t/p/w500/${obj.backdrop_path} alt="Imagem de capa do card">
               <div class="card-body">
                   <div class="card-body">
            <h5 class="card-title">${obj.title}</h5>
            <p class="text-banner">${obj.overview}</p>
            <a href="${obj.homepage}" class="btn btn-primary">Ver mais</a>
        </div
              </div>
        </div>
    </div>`)
    document.getElementById('tela4').innerHTML = texto;
} 

function zeroZerosete () {
    var xhr = new XMLHttpRequest();
    xhr.onload = szeroZerosete;
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/36557?api_key=0f3fb72a7a6f467451fc6b155705be3d&language=pt-BR');
    xhr.send();
}

function snoPain () {
    let obj = (JSON.parse(this.responseText));
    let texto = (`
    <div class="col-12">
        <div class="card">
        <img class="card-img-top" src=https://image.tmdb.org/t/p/w500/${obj.backdrop_path} alt="Imagem de capa do card">
               <div class="card-body">
                   <div class="card-body">
            <h5 class="card-title">${obj.title}</h5>
            <p class="text-banner">${obj.overview}</p>
            <a href="${obj.homepage}" class="btn btn-primary">Ver mais</a>
        </div
              </div>
        </div>
    </div>`)
    document.getElementById('tela5').innerHTML = texto;
} 

function noPain () {
    var xhr = new XMLHttpRequest();
    xhr.onload = snoPain;
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/550?api_key=0f3fb72a7a6f467451fc6b155705be3d&language=pt-br&append_to_response=images&include_image_language=pt-br');
    xhr.send();
}

function sRush () {
    let obj = (JSON.parse(this.responseText));
    let texto = (`
    <div class="col-12">
        <div class="card">
        <img class="card-img-top" src=https://image.tmdb.org/t/p/w500/${obj.backdrop_path} alt="Imagem de capa do card">
               <div class="card-body">
                   <div class="card-body">
            <h5 class="card-title">${obj.title}</h5>
            <p class="text-banner">${obj.overview}</p>
            <a href="${obj.homepage}" class="btn btn-primary">Ver mais</a>
        </div
              </div>
        </div>
    </div>`)
    document.getElementById('tela6').innerHTML = texto;
} 

function Rush () {
    var xhr = new XMLHttpRequest();
    xhr.onload = sRush;
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/96721?api_key=0f3fb72a7a6f467451fc6b155705be3d&language=pt-BR');
    xhr.send();
}

function sCoringa () {
    let obj = (JSON.parse(this.responseText));
    let text = (`
    <div class="col-12">
        <div class="card">
        <img class="card-img-top" src=https://image.tmdb.org/t/p/w500/${obj.backdrop_path} alt="Imagem de capa do card">
               <div class="card-body">
                   <div class="card-body">
            <h5 class="card-title">${obj.title}</h5>
            <p class="text-banner">${obj.overview}</p>
            <a href="${obj.homepage}" class="btn btn-primary">Ver mais</a>
        </div>
    </div>`)
    document.getElementById('tela7').innerHTML = text;
} 

function Coringa () {
    var xhr = new XMLHttpRequest();
    xhr.onload = sCoringa;
    xhr.open('GET', 'https://api.themoviedb.org/3/movie/475557?api_key=0f3fb72a7a6f467451fc6b155705be3d&language=en-US&append_to_response=images&include_image_language=en');
    xhr.send();
}

window.onload = () => {
    Avengers();
    spiderMan ();
    Annabelle ();
    PoderosoChefao ();
    zeroZerosete ();
    noPain ();
    Rush ();
    Coringa ();
}