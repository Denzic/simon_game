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

// Add color to each box
let pattern = []
let input = []
let level = 1
const color = ["green", "red", "yellow", "blue"]
$(".box").each((i, element) => {
  element.style.backgroundColor = color[i]
  element.addEventListener("mousedown", clicked)
})

function clicked(e) {
  input.push(e.target.id)
  if (input.length === pattern.length) {
    check()
  } else {
    console.log("not checking");
    console.log(`input3: ${input}`)
    console.log(`pattern3: ${pattern}`)
  }
}

function check() {
  pattern.forEach((element, i) => {
    if (Number(input[i]) !== element) {
      console.log('Game Over');

      console.log(`input1: ${input}`)
      console.log(`pattern1: ${pattern}`)
      input = []
      pattern = []
      console.log(`input1.5: ${input}`)
      console.log(`pattern1.5: ${pattern}`)
    } else {
      addPattern()

      console.log(`input2: ${input}`)
      console.log(`pattern2: ${pattern}`)
      input = []
      console.log(`input2.5: ${input}`)
    }
  })

}

function addPattern() {
  pattern.push(Math.floor(Math.random() * 4) + 1)
  console.log(pattern);

  console.log(`input5: ${input}`)
  console.log(`pattern5: ${pattern}`)
}

addPattern()