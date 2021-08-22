function soNDNN() {
  var tong = 0
  var snd = document.getElementById('inSND')
  for (var i = 1; i < 10000; i++) {
    tong += i

    if (tong > 10000){
       break
    }
  }
  return (snd.innerHTML = 'Số nguyên dương nhỏ nhất theo điều kiện: ' + i)
}
document.getElementById('btnSND').onclick = soNDNN
