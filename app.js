//initial values
let val1 = ''
let val2 = ''
let operator = ''

$(() => {
  //button num on click
  $('.num').on('click', event => {
    if (operator === '') {
      val1 += $(event.currentTarget).text()
      console.log(`This is Val1: ${val1}`)
      $('#output').text(val1)
    } else {
      val2 += $(event.currentTarget).text()
      console.log(`This is Val2: ${val2}`)
      $('#output').text(val2)
    }
  })
///here we are recognizing the numbers on click

  $('.operator').on('click', event => {
    operator = $(event.currentTarget).text()
    console.log(`The operatir is ${operator}`);
  })
  ///we have added the operators which means the else statement on line 14 will now be triggered
  // We now can recognize val1 and val2 only when an operator is clicked.

  //equals on click
  $('#equals').on('click', event => {
    //let result = parseInt(val1) + parse(val2)
    //console.log(`This is the result ${result}`);
    if (operator === '+') {
      let result = parseInt(val1) + parseInt(val2)
      console.log(`This is the result ${result}`)
      ('#output').text(result)
    } else if (operator === '-') {
      let result = parseInt(val1) - parseInt(val2)
      console.log(`This is the result ${result}`)
      ('#output').text(result)
    } else if (operator.toLowerCase() === 'x') {
      let result = parseInt(val1) * parseInt(val2)
      console.log(`This is the result ${result}`)
      ('#output').text(result)
    } else if (operator === '/') {
      let result = parseInt(val1) / parseInt(val2)
      console.log(`this is the result ${result}`)
      $('#output').text(result)
    }
  })

  //clear on click
  $('#clear').on('click', () => {
    val1 = ''
    val2 = ''
    operator = ''
    $('#output').text('0')
  })
//closing
})
