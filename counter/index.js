/* // set initial count
let count = 0

//Select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (item) {
  item.addEventListener('click', function (e) {
    const styles = e.currentTarget.classList
    if (styles.contains('decrease')) {
      count--
    }
    else if (styles.contains('increase')) {
      count++
    }
    else {
      count = 0
    }

    value.style.color = count > 0 ? 'green' : count < 0 ? 'red' : '#222'

    value.textContent = count
  })
})
 */

//set initial count
let count = 0

//select value and btns
const value = document.querySelector('#value')
const decrease = document.getElementById('btn-decrease')
const reset = document.getElementById('btn-reset')
const increase = document.getElementById('btn-increase')


decrease.addEventListener('click', function () {
  count--
  value.textContent = count
})


reset.addEventListener('click', function () {
  count = 0
  value.textContent = count
})

increase.addEventListener('click', function () {
  count++
  value.textContent = count
})