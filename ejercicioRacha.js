const niveles =[true, false, true, false, false, true, true, true, false] // se pone const por que no va haber cambios en el array, si se agregan o quitan elementos seria let

let completados = 0
let noCompletados = 0
let maxRacha = 0
let rachaCompletados = 0
for(let i = 0;  i < niveles.length; i++) {
  const nivel = niveles[i]
  if (nivel === true) {
    rachaCompletados++
    completados++
  } else {
    noCompletados++
    if (rachaCompletados > maxRacha) {
      maxRacha = rachaCompletados
    }  
    rachaCompletados = 0
  }
}
console.log(maxRacha)
