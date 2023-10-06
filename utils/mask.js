function maskTelefone(value) {
  return value
  .replace(/\D/g, "")
  .replace(/^(\d{2})(\d)/g, "($1) $2")
  .replace(/(\d)(\d{4})$/, "$1-$2")
        
}

function maskValor(value) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d)(\d{2})$/, "$1.$2")
    .replace(/(?=(\d{3})+(\D))\B/g, " ")
}

function maskCPF (value){
return value
.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

function maskData (value){
  return value
  .replace(/(\d{2})(\d{2})(\d{4})/g, '$1/$2/$3')
}

function maskHora (value){
  return value
  .replace(/(\d{2})(\d{2})/g, '$1:$2')
}



export { 
  maskTelefone, 
  maskValor, 
  maskCPF, 
  maskData,
  maskHora
}