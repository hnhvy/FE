let SumCal = (spanID, ...numbers) => {
  let sum = 0
  let result = 0
  numbers.map((number) => {
    sum += number
  })
  result = sum / numbers.length
  return getELE(spanID).innerHTML = result.toFixed(2)
}
var getELE = (id) => {
  return document.getElementById(id)
}

getELE('btnKhoi1').addEventListener('click', (e) => {
  e.preventDefault()
  let inputMath = parseFloat(getELE('inpToan').value)
  let inputPhysical = parseFloat(getELE('inpLy').value)
  let inputChemistry = parseFloat(getELE('inpHoa').value)
  SumCal('tbKhoi1', inputMath, inputPhysical, inputChemistry)
})

getELE('btnKhoi2').addEventListener('click', (e) => {
  e.preventDefault()
  let inputLiterature = parseFloat(getELE('inpVan').value)
  let inputHistory = parseFloat(getELE('inpSu').value)
  let inputGeography = parseFloat(getELE('inpDia').value)
  let inputEnglish = parseFloat(getELE('inpEnglish').value)
  SumCal('tbKhoi2', inputLiterature, inputHistory, inputGeography, inputEnglish)
})