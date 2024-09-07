function pesquisar() {
    let section = document.getElementById ("resultados-pesquisa")
    let campoPesquisa = document.getElementById ("campo-pesqusia").value
  
    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado. Você precisa digitar o nome de um jogo.</p>"
        return
    } 

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    

    for (let dado of dados){
        titulo = dado.titulo.toLocaleLowerCase ();
        descricao = dado.descricao.toLocaleLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>    
    </div>`
    }    
    if (!resultados){
        resultados = "<p> Nada foi encontrado</p>"
    }
    }
    console.log(campoPesquisa)
    section.innerHTML = resultados;    
}