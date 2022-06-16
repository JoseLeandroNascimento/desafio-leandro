
const ul = document.querySelector("#lista");


fetch("http://jsonplaceholder.typicode.com/users")
.then(res=> res.json())
.then(json => {

    json.forEach((item)=>{

        const itemNome = criaItemLista("Nome",item["name"]);
        const itemSobrenome = criaItemLista("Sobrenome",item["username"])

        ul.appendChild(itemNome)   
        ul.appendChild(itemSobrenome)     
    })
})

function criaItemLista(label,valor){

    const item = document.createElement("li");

    item.innerHTML= label + ":";
    item.innerHTML+= valor;

    return item
}