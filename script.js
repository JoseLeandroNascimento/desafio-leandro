
const ul = document.querySelector("#lista");


fetch("http://jsonplaceholder.typicode.com/users")
.then(res=> res.json())
.then(json => {

    json.forEach((item)=>{

        const itemNome = criaItemLista(item["name"]);
    
        ul.appendChild(itemNome)   
  
    })
})
.catch(erro=>{

    const itemErro = criaItemLista("Ocorreu um erro na aquisição dos dados")
    ul.appendChild(itemErro)
})

function criaItemLista(nome){

    const item = document.createElement("li");

    item.innerHTML= nome;

    return item
}