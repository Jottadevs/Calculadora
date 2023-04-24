function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML 
    document.getElementById('resultado').innerHTML = numero + num
}
function clean()
{
    document.getElementById('resultado').innerHTML = ""
}

function back(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else{
        ocument.getElementById('resultado').innerHTML = ""
    }
}
    
const HTML = document.querySelector('html')
const title = document.querySelector('.darkmode')
const checkbox = document.querySelector('#darkmode')
const darkmode = document.querySelector('.darkmod')

checkbox.addEventListener('change', () => {
    HTML.classList.toggle('dark')
})