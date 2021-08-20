// /**
//  * Khối 1: inputs
//  * điểm chuẩn,điểm 3 môn, khu vực, đối tượng
//  *
//  *
//  * Khối 2:
//  * B1: tạo biến lấy giá trị của 3 môn thi điểm chuẩn, khu vực , đối tượng 
//  * B2: dùng hàm checkdiemliet => kiểm tra 3 giá trị 3 môn nhập vào --- <0 nhắc nhở người dùng, nếu = 0 thì rớt, ngược lại lấy giá trị
//  * tính được tổng 3 môn
//  * B3:Dùng hàm check khu vực nếu người dùng chưa chọn thì nhắc nhở người dùng nhập nếu đã chọn thì trả về khuVuc
//  * B4: Dùng hàm kiểm tra đối tượng nếu như người dùng chưa chọ thì nhắc nhở người dùng nhập, nếu đã chọn thì trả về doiTuong 
//  * B5: so sánh total vs điểm chuẩn để xuất ra kết quả
//  *
//  * Khối 3:
//  * Đậu hay rớt , tổng điểm
//  *
//  */

function checkDiemLiet(a, b, c) {
  if (a < 0 || b < 0 || c < 0) {
    alert("Điểm không được là số âm");
  } else {
    if (a == 0 || b == 0 || c == 0) {
      document.getElementById('result').innerHTML = "Bạn đã rớt, liệt rồi";
    } else {
      let total = a + b + c;
      return total;
    }
  }
}
function checkKhuVuc(khuVuc) {
  if (khuVuc == -1) {
    alert("Chọn khu vực!");
  } else {
    return khuVuc;
  }
}

function checkDoiTuong(doiTuong) {
  if (doiTuong == -1) {
    alert("Chọn khu vực!");
  } else {
    return doiTuong;
  }
}

function checkDiemChuan(total, diemChuan) {
  if (total >= diemChuan) {
    return true;
  } else {
    return false;
  }
}

document.getElementById('btnKetQua').addEventListener('click', function () {
  // Lấy giá trị
  var mon_1 = parseFloat(document.getElementById("mon1").value);
  var mon_2 = parseFloat(document.getElementById("mon2").value);
  var mon_3 = parseFloat(document.getElementById("mon3").value);
  var diemChuan = document.getElementById("diemChuan").value;
  const khuVuc = parseFloat(document.getElementById('khuVuc').value);
  const doiTuong = parseFloat(document.getElementById('doiTuong').value);

  const total = checkDiemLiet(mon_1, mon_2, mon_3) + checkKhuVuc(khuVuc) + checkDoiTuong(doiTuong);

  console.log(total);
  if (checkDiemChuan(total, diemChuan)) {
    document.getElementById('tongDiem').innerHTML = "Tổng điểm: " + total;
    document.getElementById('result').innerHTML = "Đậu";
  } else {
    document.getElementById('tongDiem').innerHTML = "Tổng điểm: " + total;
    document.getElementById('result').innerHTML = "Rớt";
  }
});