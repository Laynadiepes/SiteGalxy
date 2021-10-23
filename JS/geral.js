// Simplificar codigo usando classe ao inves de id 
function verificaQuiz(){
     let nota = 0;
//dificil
     if(document.getElementById("id1a").checked ) {
         nota ++;
     }
     if(document.getElementById("id2b").checked) {    
         nota ++;
     }
     if (document.getElementById("id3c").checked){
         nota++;
//media
     }
     if(document.getElementById("im1b").checked) {    
         nota ++;
     }
     if (document.getElementById("im2c").checked){
         nota++;
     }
     if (document.getElementById("im3a").checked){
         nota++;
//facil
     }
     if(document.getElementById("if1a").checked) {    
         nota ++;
     }
     if (document.getElementById("if2c").checked){
         nota++;
     }
     if (document.getElementById("if3c").checked){
         nota++;
 }

 document.getElementById("pontuacao").innerHTML = "Sua nota foi " +nota + " / 9";
 document.getElementById("correta1").style.color = 'green'; 
 document.getElementById("correta2").style.color = 'green'; 
 document.getElementById("correta3").style.color = 'green';         
 document.getElementById("correta4").style.color = 'green'; 
 document.getElementById("correta5").style.color = 'green'; 
 document.getElementById("correta6").style.color = 'green'; 
 document.getElementById("correta7").style.color = 'green'; 
 document.getElementById("correta8").style.color = 'green'; 
 document.getElementById("correta9").style.color = 'green'; 


}


function verificaSeNum(val) { // verifica se existe algum numero 

    let numero = "0123456789";
    let cont = 0;

    for (let i = 0; i < numero.length; i++) {
        if (val.includes(numero.charAt(i))) {
            cont++;
        }
    }

    if (cont != 0) {
        return true;
    }

}



function verificaSePont(val) { // verifica se existe alguma pontuação

    let pont = ".,:;'!@#$%ˆ&*()_-+=˜`?/{}[]|\/";
    let cont = 0;

    for (let i = 0; i < pont.length; i++) {
        if (val.includes(pont.charAt(i))) {
            cont++;
        }
    }

    if (cont != 0) {
        return true;
    }

}

function verificaNum(val) { //verifica se tudo digitado é numero

    let numero = "0123456789";
    for (let i = 0; i < numero.length; i++) {

        while (val.includes(numero.charAt(i))) {
            val = val.replace(numero.charAt(i), "");
        }
    }

    if (val.length == 0) {
        return true;
    } else {
        return false;
    }

}


function verificaIdade(newIdade){
    verificaGeral(newIdade);

    let aux = document.getElementById(newIdade).value;

    if (aux >= 100 || aux <=16){
        document.getElementById("erroCur1").innerHTML = "Insira uma idade válida!";   
    }else{
        document.getElementById("erroCur1").innerHTML = "";
    }
}

function verificaEnvio() {
        document.getElementById("erroCur1").innerHTML = "Currículo enviado com sucesso!";
        document.getElementById("erroCur1").style.color = 'green';         
}

function verificaGeral(limpa) { //essa funcao limpa a escrita e diz se a input esta vazia

    if (document.getElementById(limpa).value == "") {
        document.getElementById(limpa).style.borderColor = "red";
        document.getElementById(limpa).value = "Preencher ";
    } else {
        document.getElementById(limpa).style.borderColor = " #65358d";
    }


    let aux = document.getElementById(limpa).value;

    aux = aux.trim();

    while (aux.includes("  ")) {

        aux = aux.replace("  ", " ");
    }

    document.getElementById(limpa).value = aux;

}

function verificaSenha(newSenha) {
    let numero = "1234567890";
    let pont = ".,:;'!@#$%ˆ&*()_-+=˜`?/{}[]|\/";
    let maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let cont = 0;
    let cont2 = 0;
    let cont3 = 0;
    if (document.getElementById(newSenha).value == "") {
        document.getElementById(newSenha).style.borderColor = "red";
    } else {
        document.getElementById(newSenha).style.borderColor = " #65358d";
    }

    let aux = document.getElementById(newSenha).value;

    if (aux.length < 6 || aux.length > 10) {
        document.getElementById("form1").innerHTML = "- A senha deve conter entre 6 e 10 caracteres";
        document.getElementById(newSenha).style.borderColor = "red";
    } else {
        document.getElementById("form1").innerHTML = "";
    }

    for (let i = 0; i < numero.length; i++) {
        if (aux.includes(numero.charAt(i))) {
            cont++;

        }
    }

    for (let i = 0; i < pont.length; i++) {
        if (aux.includes(pont.charAt(i))) {
            cont2++;
        }
    }

    for (let i = 0; i < maiuscula.length; i++) {
        if (aux.includes(maiuscula.charAt(i))) {
            cont3++;

        }
    }

    if (cont != 0) {
        document.getElementById("form2").innerHTML = "";
    } else {
        document.getElementById("form2").innerHTML = "- A senha deve conter pelo menos 1 número";
        document.getElementById(newSenha).style.borderColor = "red";
    }

    if (cont2 != 0) {
        document.getElementById("form3").innerHTML = "";
    } else {
        document.getElementById("form3").innerHTML = "- A senha deve conter pelo menos 1 caractér especial";
        document.getElementById(newSenha).style.borderColor = "red";
    }

    if (cont3 != 0) {
        document.getElementById("form4").innerHTML = "";
    } else {
        document.getElementById("form4").innerHTML = "- A senha deve conter pelo menos 1 letra maiúscula";
        document.getElementById(newSenha).style.borderColor = "red";
    }



}

var imagens = [];
imagens.push ("../Imagens/1.jpeg");
imagens.push ("../Imagens/2.jpeg");
imagens.push ("../Imagens/3.jpeg");
imagens.push ("../Imagens/5.jpeg");
imagens.push ("../Imagens/6.png");
imagens.push ("../Imagens/7.jpeg");
imagens.push ("../Imagens/8.jpeg");
imagens.push ("../Imagens/9.jpeg");
imagens.push ("../Imagens/10.jpeg");
imagens.push ("../Imagens/11.jpeg");
imagens.push ("../Imagens/12.jpeg");
imagens.push ("../Imagens/13.jpeg");
imagens.push ("../Imagens/14.jpeg");
imagens.push ("../Imagens/15.jpeg");
imagens.push ("../Imagens/16.jpeg");


var i=0;


function voltar(){

    if (i<=0){
        i= imagens.length - 1;
    } else{
        i--;
    }

    document.getElementById("iFoto").src = imagens[i];
    document.getElementById("iTexto").innerHTML = imagensTexto[i];

}

function passar(){

if (i>=imagens.length){
    i=0;
} else{
    i++;
}

document.getElementById("iFoto").src = imagens[i];
document.getElementById("iTexto").innerHTML = imagensTexto[i];

}
 

