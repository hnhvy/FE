let hover = () => {
  let str = document.querySelector('.heading').innerHTML
  let array = [...str]
  let newArray = array.filter(item => item !== ' ')
  let html = newArray.map(spanELE => `<span>${spanELE}</span>`)
  document.querySelector('.heading').innerHTML = html.join('')
}
hover()