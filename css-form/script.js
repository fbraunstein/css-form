let range = document.querySelector("#c-unid")
let valor = document.querySelector("#valor")
range.addEventListener('input', function(){
    valor.innerHTML = range.value
})