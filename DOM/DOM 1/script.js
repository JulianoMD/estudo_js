var corpo = window.document.body
corpo.style.background = "celest"
var p1 = document.getElementsByTagName(`p`)[0] //Elements no plural deve se especificar qual é no []
p1.style.background = 'blue'
var d = document.querySelector('div.msg')
d.style.background = 'red'
d.innerText = "🐒 Troquei a frase do html pelo JavaScript 🦣"
document.write(`Troquei o texto da div do HTML, antes estava "Clique em mim", agora está escrita: ${d.innerText}<br>`)
var app = (window.navigator.appName)
var url = window.document.URL
document.write(`O navegador usado é o: ${app}<br>`)
document.write(`A url do site é: => ${url}<br>`)
document.write(`estilo da pagina ficou um dos mais feios q já vi`)