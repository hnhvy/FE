/**
 * Khối 1: inputs
 * Tên , số kw
 *
 * Khối 2:
 * B1: Kiểm tra nhập 
 * B2: tạo biến cho từng khoảng kw điện theo quy tắc
 * soKW_50,soKW50_100,soKW100_200,soKW200_350,soKW350
 * B3: tạo và lấy giá trị của hoTen , soKw
 * B4:TÍnh tiền điện theo quy tắc
 *   if (soKW <= 50) {
       ketQua = soKW * soKW_50
     } else if (soKW > 50 && soKW <= 100) {
       ketQua = 50 * soKW_50 + (soKW - 50) * soKW50_100
     } else if (soKW > 100 && soKW <= 200) {
       ketQua = 50 * soKW_50 + 50 * soKW50_100 + (soKW - 100) * soKW100_200
     }else if (soKW > 200 && soKW <= 350){
      ketQua = 50 * soKW_50 + 50 * soKW50_100 + 100 * soKW100_200 + (soKW - 200) * soKW200_350

     }
      else { 
      ketQua = 50 * soKW_50 + 50 * soKW50_100 + 100 * soKW100_200 + 150 * soKW200_350 + (soKW - 350) * soKW350

     } 
 * B5: Xuất tên và tiền điện ra
 * Khối 3: outputs
 * Tính và xuất tiền điện 
 */
 const soKW_50 = 500;
 const soKW50_100 = 650;
 const soKW100_200 = 850;
 const soKW200_350 = 1100;
 const soKW350 = 1300;
 
 // hàm so sánh dữ liệu và tính
 
 document.getElementById('btnTinh').addEventListener('click', function () {
   var hoTen = document.getElementById('hoTen').value;
   var soKW = document.getElementById('soKW').value;

   var ketQua = document.getElementById('tongTien')
   var ketQua = 0;
   // in kết quả
   if (hoTen === '' || soKW === '') {
    alert("Vui lòng nhập họ tên hoặc số Kw");
   } else {
     if (soKW <= 50) {
       ketQua = soKW * soKW_50
     } else if (soKW > 50 && soKW <= 100) {
       ketQua = 50 * soKW_50 + (soKW - 50) * soKW50_100
     } else if (soKW > 100 && soKW <= 200) {
       ketQua = 50 * soKW_50 + 50 * soKW50_100 + (soKW - 100) * soKW100_200
     }else if (soKW > 200 && soKW <= 350){
      ketQua = 50 * soKW_50 + 50 * soKW50_100 + 100 * soKW100_200 + (soKW - 200) * soKW200_350

     }
      else { 
      ketQua = 50 * soKW_50 + 50 * soKW50_100 + 100 * soKW100_200 + 150 * soKW200_350 + (soKW - 350) * soKW350

     }
     
     tenChuHo.innerHTML = hoTen
     tongTien.innerHTML = ketQua.toLocaleString() 
   }
 });
 
 