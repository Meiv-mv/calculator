const backRowEl = document.getElementById("back-row-el")
const mainRowEl = document.getElementById("main-row-el")
const clearBtn = document.getElementById("clear-btn")
let backRow = []

function inputDisplay(i){
  mainRowEl.value += i
}

function renderBackRow(a){
  backRowEl.innerHTML = ""
  backRow.push(mainRowEl.value)
  backRow.push(a)
  let buffer = ``
  for (let i = 0; i < backRow.length; i++){
    buffer += backRow[i] + " "
  }
  backRowEl.innerHTML = buffer
  mainRowEl.value = ""
}

function result(){
  renderBackRow("")
  try {
    mainRowEl.value = eval(backRowEl.innerHTML)
  } catch (error){
    mainRowEl.value = "Error"
  }
  backRow = []
}

clearBtn.addEventListener("click", function(){
  backRowEl.innerHTML = ""
  mainRowEl.value = ""
  backRow = []
})
