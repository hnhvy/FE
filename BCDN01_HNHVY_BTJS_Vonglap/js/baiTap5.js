function GiaiThua() {
  var kqGiaiThua = 1
  var nhapSo = parseInt(document.getElementById("nhapSo").value)
  var giaiThua = document.getElementById("giaiThua")
  for (let i = 1; i <= nhapSo; i++) {
    kqGiaiThua = kqGiaiThua * i
  }
  return (giaiThua.innerHTML = 'Giai thừa: ' + kqGiaiThua)
}
document.getElementById("btnGiaiThua").onclick = GiaiThua
