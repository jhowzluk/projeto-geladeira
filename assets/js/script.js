function validaFaleConosco() {

    var nome = document.getElementById("nome").value;
    var expRegNome = /^[A-zA-u]{3,}([ ]{1}[A-zÀ-ü]{2,})+$/;

    if (!expRegNome.test(nome)) {
        alert("Preencha o campo Nome corretamente");
        document.getElementById("nome").focus();
        return false;
    }

    var fone = document.getElementById("fone").value;
    var expRegFone = /^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$/;
    if (!expRegFone.test(fone)) {
        alert("Preencha o campo Telefone");
        document.getElementById("fone").focus();
        return false;
    }
    if (document.getElementById("email").value == "") {
        alert("Preencha o campo E-mail");
        document.getElementById("email").focus();
        return false;
    }
    if (document.getElementById("motivo").value == "") {
        alert("Preencha o campo Motivo");
        document.getElementById("motivo").focus();
        return false;
    }
    if (document.getElementById("produtoOpcao").value == "") {
        alert("Preencha o campo Opção Produto");
        document.getElementById("produtoOpcao").focus();
        return false;
    }
    if (document.getElementById("comentario").value == "") {
        alert("Preencha o campo Comentário");
        document.getElementById("comentario").focus();
        return false;
    }

    return true;
}

function verificaMotivo(motivo) {
    var elemento = document.getElementById("opcaoProduto");

    if (motivo == "PR") {
        // cria o elemento select e guardamos na variável homonima
        var select = document.createElement("select");
        // Setamos nesse novo select o atributo "name" com o valor "selproduto"
        select.setAttribute("name", "selproduto");
        select.setAttribute("id", "produtoOpcao");

        //Criamos um elemento (tag) <option> e guardamos na variável homônima
        var option = document.createElement("option");
        //Setamos nesse novo option o atributo 'value' com o valor vazio
        option.setAttribute("value", "");
        //Criamos um nó de texto "Escolha" e gravamos na variavel 'texto'
        var texto = document.createTextNode("Escolha");
        //Colocamos o nó de texto criado como "filho" da tag option criada
        option.appendChild(texto);
        //Conteúdo atual da variável option:
        //<option value="">Escolha</option>

        //Colocamos o option criado como "filho" da tag select criada
        select.appendChild(option);
        //Conteúdo atual da variável select:
        //<select name="selproduto"><option value="">Escolha</option></select>

        //Criamos um elemento (tag) <option> e guardamos na variavel homonima
        var option = document.createElement("option");
        //Setamos nesse novo option o atributo 'value' com o valor "FR"
        option.setAttribute("value", "FR");
        //Criamos um no de texto "Freezer" e gravamos na variavel 'texto'
        var texto = document.createTextNode("Freezer");
        //Colocamos o no de texto criado como "filho" da tag option criada
        option.appendChild(texto);
        //Conteudo atual da variável option:
        //<option value="FR">Freezer</option>

        //Colocamos o option criado como "filho" da tag select criada
        select.appendChild(option);
        //Conteudo atual da variavel select:
        /*
        <select name="selproduto">
        <option value="">Escolha</option><option value="FR">Freezer</option>
        </select>
        */

        //Criamos um elemento (tag) <option> e guardamos na variavel homonima
        var option = document.createElement("option");
        //Setamos nesse novo option o atributo 'value' com o valor "GE"
        option.setAttribute("value", "GE");
        //Criamos um no de texto "Geladeira" e gravamos na variavel 'texto"
        var texto = document.createTextNode("Geladeira");
        //Colocamos o no de texto criado como "filho" da tag option criada
        option.appendChild(texto);
        //Conteúdo atual da variável option:
        //<option value-"GE">Geladeira</option>

        //Colocamos o option criado como "filho" da tag select criada
        select.appendChild(option);
        //Conteudo atual da variavel select:

        // <select name="selproduto">
        // <option value="">Escolha</option><option value="FR">Freezer</option><option value="GE">Geladeira</option>
        // </select>

        //Colocamos o select criado como "filho" da tag div capturada no inicio da funcao
        elemento.appendChild(select);

        //Se o valor da variavel motivo nao for "PR" ...
    } else {
        //Se a div possuir algum "primeiro filho"
        if (elemento.firstChild) {

            //Removemos ele
            elemento.removeChild(elemento.firstChild);
        }
        1//fim da funcão verificaMotivo

    }

}

$(document).ready(function ($) {
    $("header").load("/pages/general/cabecalho.html");
    $("nav").load("/pages/general/menu.html");
    $("footer").load("/pages/general/rodape.html");
});
