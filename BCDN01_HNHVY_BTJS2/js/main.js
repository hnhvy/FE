// /* Scroll to Top */
// $(document).ready(function(){
//     $(window).scroll(function () {
//            if ($(this).scrollTop() > 50) {
//                $('#scroll-to-top').fadeIn();
//            } else {
//                $('#scroll-to-top').fadeOut();
//            }
//        });
//        // scroll body to 0px on click
//        $('#scroll-to-top').click(function () {
//            $('#scroll-to-top').tooltip('hide');
//            $('body,html').animate({
//                scrollTop: 0
//            }, 800);
//            return false;
//        });

//        $('#scroll-to-top').tooltip('show');

// });
/**
 * Khối 1: inputs
 * Số ngày làm, lương của 1 ngày
 * Khối 2:
 * B1: tạo biến và lấy giá trị người dùng nhập vào số ngày, lương của 1 ngày
 * ngaylamViec
 * luongmotNgay
 * B2: Tính tiền lương
 * ngaylamViec * luongmotNgay
 *
 * Khối 3: Output
 * Tính lương nhân viên
 */
// bai1
function tinhLuong() {
    // tạo biến và gán giá trị
    var ngaylamViec = document.getElementById('ngaylamViec').value
    var luongmotNgay = 100000
    var tienLuong = document.getElementById('tienLuong')
    if (ngaylamViec > 0 || ngaylamViec === '0') {
      tienLuong.style.color = 'green'
      tienLuong.innerHTML =
        'Tổng tiền tháng này là: ' +
        Math.floor(ngaylamViec * luongmotNgay).toLocaleString() +
        'đ'
    } else {
      tienLuong.style.color = 'red'
      tienLuong.innerHTML = 'Vui lòng nhập vào số ngày bạn đã làm!'
    }
  }

  document.getElementById('btntienLuong').onclick = tinhLuong
//   bai2
/**
 * Khối 1: inputs
 * 5 số
 * Khối 2:
 * B1:tạo và gán các giá trị của biến bằng giá trị người dùng nhập vào
 * num1,num2,num3,num4,num5
 * B3: tạo biến tính giá trị của 5 số : sum
 * B2: Gọi đến thuộc tính onclick của nút button và in giá trị
 * Khối 3:
 * Tính số trung bình
 * (num1+num2+num3+num4+num5) / 5
 */

document.getElementById('btnketQua').onclick = function () {
    // tạo và gán giá trị
    var num1 = document.getElementById('number1').value
    var num2 = document.getElementById('number2').value
    var num3 = document.getElementById('number3').value
    var num4 = document.getElementById('number4').value
    var num5 = document.getElementById('number5').value
    // giá trị trung bình của 5 số
    var sum =
      (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) /
      5

    // nơi để in kết quả
    var ketQua = document.getElementById('ketQua')
    if (num1 == '' || num2 == '' || num3 == '' || num4 == '' || num5 == '') {
      ketQua.style.color = 'red'
      ketQua.innerHTML = 'Vui lòng nhập giá trị vào ô input'
    } else {
      ketQua.style.color = 'green'
      ketQua.innerHTML = 'Giá Trị Trung Bình Của 5 số là: ' + sum
    }
  }
//   bài 3
/**
 * Khối 1: inputs
 * Giá USD
 * Khối 2:
 * B1: tạo và lấy giá trị của người dùng nhập vào
 * tienDoi
 * B2: tạo và gán giá trị quy đổi
 * menhGia = 23500
 * B3: Quy đổi từ usd sang vnđ
 * tienDoi * menhGia
 * Khối 3: outputs
 * xuất ra tiền sau quy đổi
 */

document.getElementById('btndoiTien').onclick = function () {
    // tạo biến và lấy giá trị
    var tienDoi = document.getElementById('tien').value
    var menhGia = 23500
    // in giá trị quy đổi
    var ketQua = document.getElementById('ketQuaVNĐ')
    if (tienDoi > 0) {
      ketQua.style.color = 'red'
      ketQua.innerHTML =
        'Số Tiền Đã Được Quy Đổi là : ' +
        (menhGia * tienDoi).toLocaleString() +
        'VNĐ'
    } else {
      ketQua.style.color = 'green'
      ketQua.innerHTML = 'Vui lòng nhập vào số tiền $ bạn muốn quy đổi'
    }
  }
//   bài 4
/**
 * Khối 1: inputs
 * Chiều Dài, Chiều Rộng
 * Khối 2:
 * B1: tạo và gán giá trị người dùng nhập vào chiều dài và chiều rộng
 * rong, dai
 * B2: tạo function(ketQua,value): kiểm tra giá trị người dùng
 * ketQua :  nơi để in ra giá trị
 * value: diện tích và chu vi
 * B3: tạo và gán giá trị cho diện tích, chu vi
 * dienTich,chuVi
 * Khối 3:
 * diện tích, chu vi hình chữ nhật
 */
var rong = document.getElementById('rong')
var dai = document.getElementById('dai')
// tạo function kiểm tra giá trị
function checkValue(ketQua, value) {
  if (rong.value == '' && dai.value == '') {
    ketQua.style.color = 'red'
    ketQua.innerHTML =
      'Vui lòng nhập giá trị chiều rộng và chiều dài hình chữ nhật'
  } else if (rong.value == '') {
    ketQua.style.color = 'red'
    ketQua.innerHTML = 'Vui lòng nhập giá trị chiều rộng hình chữ nhật'
  } else if (dai.value == '') {
    ketQua.style.color = 'red'
    ketQua.innerHTML = 'Vui lòng nhập giá trị chiều dài hình chữ nhật'
  } else if (rong.value <= 0 || dai.value <= 0) {
    ketQua.style.color = 'red'
    ketQua.innerHTML = 'Không tính được. Vui lòng nhập các giá trị lớn hơn 0!!'
  } else {
  
    if(document.getElementById('btndienTich').onclick){
        ketQua.style.color = 'green'
         ketQua.innerHTML = 'Giá trị tính được bằng : ' + value
    }
    if(document.getElementById('btnchuVi').onclick){
        ketQua.style.color = 'green';
        ketQua.innerHTML = 'Giá trị tính được bằng : ' + value;

    }
  }
}

// nút click diện tích
document.getElementById('btndienTich').onclick = function () {
    // tính diện tích
    var dienTich = rong.value * dai.value
    // xuất kết quả
    var ketQuadienTich = document.getElementById('ketQuadienTich');
    document.getElementById('ketQuachuVi').innerHTML=""
    checkValue(ketQuadienTich, dienTich);
  }
  // nút click chu vi
  document.getElementById('btnchuVi').onclick = function () {
    // tính chu vi
    var chuVi = (parseInt(rong.value) + parseInt(dai.value)) * 2
    // xuất kết quả
    var ketQuachuVi = document.getElementById('ketQuachuVi');
    document.getElementById('ketQuadienTich').innerHTML=""
    checkValue(ketQuachuVi, chuVi)
  }
// bài 5
/**
 * khối 1: inputs
 * số đầu vào có 2 chữ số
 * khối 2:
 * B1: tạo và gán giá trị mà người dùng nhập vào ô input
 * value
 * B2: Xử lý đầu vào có 2 chữ số
 * tạo biến và nhắc nhở người dùng phải nhập vào 2 chữ số
 * message
 * B3: Tính số hàng chục, tính số hàng đơn vị
 *numberTens,numberUnits
 * Khối 3:
 * Tổng số hàng chục và hàng đơn vị của 1 số
 *
 */

var valueNumber = document.getElementById('trungbinhCong')

document.getElementById('btnSum').onclick = function (e) {
  // tính số hàng chục và hàng đơn vị
  var numberTens = valueNumber.value / 10
  var numberUnits = valueNumber.value % 10
  // tạo biến message
  var message = document.getElementById('message')
  // Điều kiện để tính tổng 2 ký số
  if (valueNumber.value < 10 || valueNumber.value > 99) {
    message.innerHTML = 'Vui Lòng Nhập Số Có 2 Chữ Số '
    document.getElementById('ketQuaTong').innerHTML = ''
  } else {
    message.innerHTML = ''
    document.getElementById('ketQuaTong').innerHTML =
      'Tổng 2 ký số bằng: ' + (parseInt(numberTens) + parseInt(numberUnits))
  }
}
