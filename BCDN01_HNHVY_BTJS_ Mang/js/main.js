//Thêm giá trị vào mảng
let mangPT = []
function ThemPhanTu() {
  var phanTu = parseInt(document.getElementById('phanTu').value)
  if (!phanTu) return
  var themSo = document.getElementById("themSo")
  mangPT.push(phanTu)
  document.getElementById('phanTu').value = ''
  return (themSo.innerHTML = mangPT.join())
}

document.getElementById("btnThemSo").onclick = ThemPhanTu

// Bài 1: Tổng số Dương

function Tong() {
  var tong = 0
  var showTong = document.getElementById("showTong")
  for (let i = 0; i < mangPT.length; i++) {
    if (mangPT[i] > 0){
     tong += mangPT[i]
    }
  }
  return (showTong.innerHTML = 'Tổng số dương: ' + tong)
}
document.getElementById("btnTong").onclick = Tong

// Bài 2: Đếm số dương

function DemSo() {
  var count = 0
  var showDem = document.getElementById("showDem")
  for (let i = 0; i < mangPT.length; i++) {
    if (mangPT[i] > 0) count++
  }
  return (showDem.innerHTML = 'Số dương: ' + count)
}
document.getElementById("btnDem").onclick = DemSo

// Bài 3: Tìm số nhỏ nhất

function SoNhoNhat() {
  var soNhoNhat = mangPT[0]
  var inSNN = document.getElementById("inSNN")
  for (let i = 0; i < mangPT.length; i++) {
    if (soNhoNhat > mangPT[i]) soNhoNhat = mangPT[i]
  }
  return (inSNN.innerHTML = 'Số nhỏ nhất là: ' + soNhoNhat)
}
document.getElementById("btnSNN").onclick = SoNhoNhat

// Bài 4 : tìm số dương nhỏ nhất

function SoDuongNN() {
  var min = mangPT[0]
  var showSoDuongNN = document.getElementById("showSoDuongNN")
  for (let i = 0; i < mangPT.length; i++) {
    if (min > mangPT[i] && mangPT[i] > 0) min = mangPT[i]
  }
  return (showSoDuongNN.innerHTML = 'Số nhỏ nhất là: ' + min)
}
document.getElementById("btnSoDuongNN").onclick = SoDuongNN

// Bài 5: tìm số chẵn cuối cùng
function InSoChanCuoi() {
  var chan = 0
  var showSoChan = document.getElementById("showSoChan")
  for (let i = 0; i < mangPT.length; i++) {
    if ( mangPT[i] % 2 === 0) chan =  mangPT[i]
  }
  return (showSoChan.innerHTML = 'Số chẵn cuối cùng: ' + chan)
}
document.getElementById("btnInSoChanCuoi").onclick = InSoChanCuoi

// Bài 6: Đổi chỗ
function DoiViTri() {
  var vitri_1 = parseInt(document.getElementById("vitri_1").value)
  var vitri_2 = parseInt(document.getElementById("vitri_2").value)
  var doiViTri = document.getElementById("doiViTri")
  var temp = mangPT[vitri_1]
  mangPT[vitri_1] = mangPT[vitri_2]
  mangPT[vitri_2] = temp
  return (doiViTri.innerHTML = mangPT.join())
}
document.getElementById("btnDoiViTri").onclick = DoiViTri




// Bài 7: sắp xếp thứ tự tăng dần

function SapXep() {
  var sapXep = document.getElementById("sapXep")
  mangPT.sort(function(a, b){return a - b})
  return (sapXep.innerHTML = 'Mảng sau khi sắp xếp: ' + mangPT.join())
}
document.getElementById("btnSapXep").onclick = SapXep

// Bài 8: Tìm số nguyên tố đầu tiên

function SoNguyenTo(n) {
  if (n < 2) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return true
}

function SoNTDauTien() {
  var SoNTDauTien = 0
  var soNT = document.getElementById("soNT")
  for (let j = 0; j < mangPT.length; j++) {
    if (SoNguyenTo(mangPT[j])) {
      SoNTDauTien = mangPT[j]
      break
    }
  }
  return (soNT.innerHTML = 'Số nguyên tố đầu tiên: ' + SoNTDauTien)
}

document.getElementById("btnSoNT").onclick = SoNTDauTien

// Bài 9: Đếm số nguyên
let newmangPT = []
function ThemSo() {
  var nhapSo = Number(document.getElementById('nhapSo').value)
  if (!nhapSo) return
  var showNhapSo = document.getElementById("showNhapSo")
  newmangPT.push(nhapSo)
  document.getElementById('nhapSo').value = ''
  return (showNhapSo.innerHTML = newmangPT.join())
}

document.getElementById("btnThemSoN").onclick = ThemSo

function DemSoNguyen() {
  var count = 0
  var showSoNguyen = document.getElementById("showSoNguyen")
  for (let i = 0; i < newmangPT.length; i++) {
    if (Number.isInteger(newmangPT[i])) count++
  }
  return (showSoNguyen.innerHTML = 'Số nguyên: ' + count)
}
document.getElementById("btnSoNguyen").onclick = DemSoNguyen

// Bài 10: So sánh số lượng âm và dương

function SoSanh() {
  var soAm = 0
  var soDuong = 0
  var showSoSanh = document.getElementById("showSoSanh")
  for (let i = 0; i < mangPT.length; i++) {
    if (mangPT[i] > 0) {
      soDuong++
    } else {
      soAm++
    }
  }
  if (soDuong > soAm) {
    return (showSoSanh.innerHTML = 'Số dương' + ' > ' + 'Số âm')
  } else {
    return (showSoSanh.innerHTML = 'Số âm' + ' > ' + 'Số dương')
  }
}
document.getElementById("btnSoSanh").onclick = SoSanh
