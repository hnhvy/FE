function Tong() {
  var soX = Number(document.getElementById("soX").value)
  var soN = Number(document.getElementById("soN").value)
  var ketQua = document.getElementById("ketQua")
  var tong = 0
  for (let i = 1; i <= soN; i++) {
    tong += Math.pow(soX, i)
  }
  return (ketQua.innerHTML = 'Tổng : ' + tong)
}
document.getElementById("btnTong").onclick = Tong
