// hàm while
function chiaHet3W() {
  var count = 0
  var i = 0
  var chiaHet = document.getElementById('chiaHetW')
  while (i < 1000) {
    if (i % 3 === 0) {
    count++
    }
    i++
  }
  return (chiaHet.innerHTML =
    'Các số chia hết cho 3: ' + count + ' số') 
}
document.getElementById('btnChiaHetW').onclick = chiaHet3W

// hàm for

function chiaHet3F() {
  var count = 0
  var chiaHet = document.getElementById('chiaHetF')
  for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0) {
      count++}
  }
  return (chiaHet.innerHTML =
    'Các số chia hết cho 3: ' + count + ' số')
}
document.getElementById('btnChiaHetF').onclick = chiaHet3F