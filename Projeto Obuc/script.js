var arrayP = [];

function adicionar(){
    var predio = this.lerDados();
    arrayP.push(predio);
    listaTabela();
    
}

function lerDados(){
    let predio = {}

    predio.nomePredio = document.getElementById("predio").value;
    predio.Local = document.getElementById("local").value;
    return predio;
}

function openContent(object, contentName){
    var i, menuItens;
    menuContents = document.getElementsByClassName("menucontent");
            for (i = 0; i < menuContents.length; i++) {
                menuContents[i].style.display = "none";
            }

            menuItens = document.getElementsByClassName("menuItem");
            for (i = 0; i < menuItens.length; i++) {
              menuItens[i].className = menuItens[i].className.replace(" active", "");
            }
            
            document.getElementById(contentName).style.display = "block";  

            if (object != null)
              object.parentNode.className += " active";
          

}
function listaTabela(){
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";
    for(let i = 0; i < arrayP.length; i++){
            let tr = tbody.insertRow();
            let td_Predio = tr.insertCell();
            let td_Locais = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_Predio.innerText = arrayP[i].nomePredio;
            td_Locais.innerText = arrayP[i].Local;

            td_Predio.classList.add("center");
            td_Locais.classList.add("center");
            let imgEdit = document.createElement("img");
            imgEdit.src = ("")
    }
}