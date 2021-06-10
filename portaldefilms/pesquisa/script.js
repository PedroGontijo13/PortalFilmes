function exibeNoticias () {
    let text = '';
    let obj = (JSON.parse(this.responseText));
    let tamanho = obj.results.length;
    let divTela = document.getElementById('tela');

    for(i = 0; i < tamanho; i++) {
          text = text + `
          <div class="row">
            <div class="col-12">
                <div class="card">
                  <img class="card-img-top" src=https://image.tmdb.org/t/p/w500/${obj.results[i].backdrop_path} alt="Imagem de capa do card">
                    <div class="card-body">
                      <h5 class="card-title">${obj.results[i].title}</h5>
                      <p class="text-banner">${obj.results[i].overview}</p>
                      <a href="${obj.results[i].homepage}" class="btn btn-primary">Ver mais</a>
                    </div>
                </div>
            </div>
          </div>`
      
    }
    console.log(obj.results[0])
    
    divTela.innerHTML = text;
}

function mostraLista () {
    var input = document.querySelector("#name");
    var query = input.value;

    console.log(query)

    var xhr = new XMLHttpRequest ();
    xhr.onload = exibeNoticias;
    xhr.open ('GET',`
    https://api.themoviedb.org/3/search/movie?api_key=0f3fb72a7a6f467451fc6b155705be3d&query=${query}`);
    xhr.send();
}

window.onload = () => {
  document.getElementById('btnPesquisa').addEventListener ('click', mostraLista);
}