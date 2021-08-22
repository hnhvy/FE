function TaoDiv() {
  var div = ''
  var taoDiv = document.getElementById('theDiv')
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      div += '<div class="bg-primary text-white">Div Chẵn</div>'
    } else {
      div += '<div class="bg-danger text-white">Div Lẻ</div>'
    }
  }
  return (taoDiv.innerHTML = div)
}
document.getElementById('btnTaoDiv').onclick = TaoDiv
