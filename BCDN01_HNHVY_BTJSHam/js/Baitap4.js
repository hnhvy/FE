/**
 * Khối 1: inputs
 * loaiKH, giá theo từng loại bao gồm phí xử lý hóa đơn, phí dịch vụ, thuê kênh cao cấp
 * Khối 2:
 * B1: Xử lý hienThi them mục số kết nối khi chuyển sang doanh nghiệp
 * loaiKH = dn thì display: block, ngược lại thì là none
 * B2: tạo biến và lấy các giá trị người dùng nhập vào khi click
 * loaiKH, maKH, kenhCaoCap, soKetNoi
 * B3: func sum() : tính chung tiền cáp nhà dân và doanh nghiệp
 * B4: điều kiện: nhà dân: sum() , doanh nghiệp: <=10 => + 75$  ngược lại => (số kênh -10) * 5$
 * B5: xuất kết quả
 * Khối 3: outputs
 * tiền cáp
 */
// nhà dân
const phiXLHD_ND = 4.5
const phiDVCB_ND = 20.5
const kenhCC_ND = 7.5
// doanh nghiệp
const phiXLHD_DN = 15
const phiDVCB_DN = 75
const kenhCC_DN = 50
const ketNoiThem = 5
// biến dùng chung
let loaiKH = document.getElementById('loaiKH')
let tienCap = document.getElementById('tienCap')
// hàm đóng mở input
function hienThiDN() {
  var active = document.getElementById('active')
  if (loaiKH.value == 'dn') {
    return (active.style.display = 'block')
  } else {
    return (active.style.display = 'none')
  }
}

//hàm tính tiền cap
function sum(value1, value2, value3, value4, n1, n2) {
  return Number(value1 + value2 * n1 + value4 + value3 * n2)
}

document.getElementById('btnTienCap').addEventListener('click', function () {
  var maKH = document.getElementById('maKH').value
  var soKetNoi = document.getElementById('soKetNoi').value
  var kenhCaoCap = Number(document.getElementById('kenhCaoCap').value)
  var total = 0
  switch (loaiKH.value) {
    case '':
      alert("Vui lòng điền vào trường dữ liệu")
      break
    case 'nd':
      total = sum(phiXLHD_ND, 0, kenhCC_ND, phiDVCB_ND, 1, kenhCaoCap)
      tienCap.innerHTML =
        'Mã khách hàng: ' + maKH + ' , Tổng tiền: ' + total + '$'
      break
    case 'dn':
      if (soKetNoi <= 10 && soKetNoi > 0) {
        total = sum(phiXLHD_DN, 0, kenhCC_DN, phiDVCB_DN,1, kenhCaoCap)
      } else {
        total = sum(phiXLHD_DN, ketNoiThem, kenhCC_DN, phiDVCB_DN, soKetNoi - 10, kenhCaoCap
        )
      }
      tienCap.innerHTML =
        'Mã khách hàng: ' + maKH + ' , Tổng tiền: ' + total + '$'
      break
    default:
      tienCap.innerHTML = ''
  }
});

