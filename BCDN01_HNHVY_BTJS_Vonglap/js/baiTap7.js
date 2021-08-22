// Kiem tra snt
function kiem_tra_snt(n) {
  if (n < 2) {
    return false
  }else{

  for (let j = 2; j < n; j++) {
    if (n % j === 0) {
    return false
  }
  }
}
  return true
}


function SoNguyenTo() {
  var soNguyenTo = ''
  var n = parseInt(document.getElementById('nhapSoN').value)
  var soNT = document.getElementById("soNT")
  for (let i = 0; i < n; i++) {
    if (kiem_tra_snt(i)) {
      soNguyenTo += i + ' '
    }
  }
  return (soNT.innerHTML = soNguyenTo)
}
document.getElementById("btnSoNT").onclick = SoNguyenTo
