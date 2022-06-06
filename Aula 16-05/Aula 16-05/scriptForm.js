const botao = document.querySelector("#adicionar-aluno")

botao.addEventListener("click", function(){
  event.preventDefault()

  let $dadosForm = document.querySelector("#form-aluno")
  let $dadosAluno = novoAluno($dadosForm)
  console.log($dadosAluno.vNome);
  console.log($dadosAluno.vN1);
  console.log($dadosAluno.vN2);
  console.log($dadosAluno.vN3);
  console.log($dadosAluno.media);

  let $alunotr = document.createElement("tr");
  let $nometd = document.createElement("td");
  let $n1td= document.createElement("td");
  let $n2td = document.createElement("td");
  let $n3td = document.createElement("td");
  let $mediatd = document.createElement("td");
  let $situacaotd = document.createElement("td");

  $nometd.textContent = $dadosAluno.vNome;
  $n1td.textContent = $dadosAluno.vN1;
  $n2td.textContent = $dadosAluno.vN2;
  $n3td.textContent = $dadosAluno.vN3;
  $mediatd.textContent = $dadosAluno.media.toFixed(2);
  $situacaotd.textContent = $dadosAluno.calculo;
  $situacaotd.classList.add(mostrarSituacao($dadosAluno.media)[1]);

  $alunotr.appendChild($nometd);
  $alunotr.appendChild($n1td);
  $alunotr.appendChild($n2td);
  $alunotr.appendChild($n3td);
  $alunotr.appendChild($mediatd);
  $alunotr.appendChild($situacaotd);

  let $tabela = document.querySelector("#tabela-aluno");
  $tabela.appendChild($alunotr);

  $dadosForm.reset();
  


})

function novoAluno(formulario){
    if(formulario.querySelector("#nome").value == ""){
        alert("Obrigatório informar o campo nome")
        formulario.querySelector("#nome").focus()    
    }
    else if(formulario.querySelector("#n1").value == ""){
        alert("Obrigatório preencher a primeira nota do aluno")
        formulario.querySelector("#n1").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n1").value))){
        alert("Inserir apenas valores numéricos no campo nota 1.")
        formulario.querySelector("#n1").value == "" ()
        formulario.querySelector("#n1").focus()
    }
    else if(formulario.querySelector("#n2").value == ""){
        alert("Obrigatório preencher a segunda nota do aluno")
        formulario.querySelector("#n2").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n2").value))){
        alert("Inserir apenas valores numéricos no campo nota 2.")
        formulario.querySelector("#n2").value == "" ()
        formulario.querySelector("#n2").focus()
    }
    else if(formulario.querySelector("#n3").value == ""){
        alert("Obrigatório preencher a terceira nota do aluno")
        formulario.querySelector("#n3").focus();
    }
    else if(isNaN(parseFloat(formulario.querySelector("#n3").value))){
        alert("Inserir apenas valores numéricos no campo nota 3.")
        formulario.querySelector("#n3").value == "" ()
        formulario.querySelector("#n3").focus()
    }
    
    else {
        let $vetorAluno = { 
            vNome:formulario.querySelector("#nome").value,
            vN1:formulario.querySelector("#n1").value.replace(",","."),
            vN2:formulario.querySelector("#n2").value.replace(",","."),
            vN3:formulario.querySelector("#n3").value.replace(",","."),
            media:calcularMedia(formulario.querySelector("#n1").value.replace(",","."), 
            formulario.querySelector("#n2").value.replace(",","."), 
            formulario.querySelector("#n3").value.replace(",","."),),
            calculo: 
            mostrarSituacao(calcularMedia(formulario.querySelector("#n1")
            .value.replace(",","."),formulario.querySelector("#n2")
            .value.replace(",","."),formulario.querySelector("#n3")))

        }
        return $vetorAluno;
    }
}