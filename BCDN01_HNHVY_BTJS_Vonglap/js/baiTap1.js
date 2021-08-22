// hàm while
function chanLeW() {
  var chan = ''
  var le = ''
  var i = 0
  var chanLe = document.getElementById("chanLeW")
  while (i < 100) {
    if (i % 2 === 0) {
      chan += i + ', '
    } else {
      le += i + ', '
    }
    i++
  }
  return chanLe.innerHTML = 'Số chẵn: ' + chan + '</br>' + 'Số lẽ: ' + le
}
document.getElementById('btnChanLeW').onclick = chanLeW
// hàm for
function chanLeF() {
  var chan = ''
  var le = ''
  var chanLe = document.getElementById("chanLeF")
  for (var i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      chan += i + ', '
    } else {
      le += i + ', '
    }
  }
  return (chanLe.innerHTML = 'Số chẵn: ' + chan + '</br>' + 'Số lẽ: ' + le)
}
document.getElementById('btnChanLeF').onclick = chanLeF
