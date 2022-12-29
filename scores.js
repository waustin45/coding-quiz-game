const list = document.querySelector('.list')
 const clearBtn = document.querySelector('#clear-btn')
 clearBtn.addEventListener("click", clear)
function clear (){
    localStorage.clear()
    location.reload()
}
function showScores() {
let scoresArr = [JSON.parse(localStorage.getItem('scores'))]
    
console.log(scoresArr)

const map = scoresArr[0].map((info, index) => {
    return `<li key=${index}>${info}</li>`
}).join("")
    

// for(let i =0; i < scoresArr.length; i++){
    
//     list.innerHTML = `<li>${scoresArr[i]}</li>`
// }
list.innerHTML = map
console.log(map)
}
showScores()