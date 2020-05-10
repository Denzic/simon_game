/**
 * // Interater of jQuery
 *
 * const boxes = [...$(".box")]
 * 
 * const boxes = $(".box").toArray()
 * 
 * const boxes = $.makeArray(jq)
 * 
 * $(".box").map(function (i, element) {})
 * 
 * $(".box").each(function (i, element) {})
 * 
 * $.each(array, function (i, element) {})
 * 
 *  **/



let pattern = []
let input = []
let level = 1

// Add color to all boxes
const color = ["green", "red", "yellow", "blue"]
$(".box").each((i, element) => {
  element.style.backgroundColor = color[i]
})

// Algorithm 
function clicked(e) {
  input.push(e.target.id)
  // Compare last input to corresponding pattern
  if (Number(input[input.length - 1]) === pattern[input.length - 1]) {
    // check if it' thse final input
    if (input.length === pattern.length) {
      addPattern()
      input = []
    }
  } else {
    // Game over, clear all data and delete eventListeners
    console.log('Your are a pig');
    gameOver()
  }
}

// Initiate game elements
function retry(e) {
  if (e.key) {
    addPattern()
    $(document).off("keydown", retry)
    $(".box").each((i, element) => {
      element.addEventListener("mousedown", clicked)
    })
  }
}

// Dispatch game elements
function gameOver() {
  pattern = []
  input = []
  $(".box").each((i, element) => {
    element.removeEventListener("mousedown", clicked)
  })
  $(document).on('keydown', retry)
}

function addPattern() {
  pattern.push(Math.floor(Math.random() * 4) + 1)
  console.log(pattern);
}

function start() {
  $(document).on('keydown', retry)
}

start()