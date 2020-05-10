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
$(document).on('keydown', retry)

// Add color to all boxes
const color = ["green", "red", "yellow", "blue"]
$(".box").each((i, element) => {
  element.style.backgroundColor = color[i]
})

// Algorithm 
function clicked(e) {
  flash(e.target.id)
  playSound(color[e.target.id - 1])
  input.push(e.target.id)

  // Algorithm
  // Compare last input to corresponding pattern
  if (Number(input[input.length - 1]) === pattern[input.length - 1]) {
    // Check if input has completed
    if (input.length === pattern.length) {
      input = []

      setTimeout(() => {
        addPattern()
      }, 1000);
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
    $("#title").text(`Level ${pattern.length}`)
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
  playSound("wrong")
  gameOverBg()
  $("#title").text(`Game Over, Press Any Key To Restart`)

  $(".box").each((i, element) => {
    element.removeEventListener("mousedown", clicked)
  })
  $(document).on('keydown', retry)
}

// Animation
function flash(x) {
  $(`#${x}`).css("background-color", "gray")
  setTimeout(() => {
    $(`#${x}`).css("background-color", `${color[x-1]}`)
  }, 100);
}

function gameOverBg() {
  $(`body`).addClass("game-over")
  setTimeout(() => {
    $(`body`).removeClass("game-over")
  }, 100);
}

function addPattern() {
  const x = Math.floor(Math.random() * 4) + 1
  pattern.push(x)
  $(`#${x}`).fadeOut(100).fadeIn(100)
  $("#title").text(`Level ${pattern.length}`)
  playSound(color[x - 1])
}

function playSound(soundFile) {
  const se = new Audio(`sounds/${soundFile}.mp3`)
  se.play()
}