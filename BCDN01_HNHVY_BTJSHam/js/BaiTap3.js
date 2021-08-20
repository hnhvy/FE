/**
 * Khối 1: inputs
 * hovaTen
 * tongThuNhap
 * nguoiPhuThuoc
 * thuế 
 * Khối 2:
 * B1: tạo biến và lấy giá trị người dùng nhập hovaTen,tongThuNhap,nguoiPhuThuoc
 * B2: tạo biến và lấy giá trị % thuế theo yêu cầu cho mỗi thu nhập : thue_60,thue60_120, thue120_210, thue210_384, thue384_624, thue624_960, thue960
 * B3: tính thuNhap = tongThuNhap - 4e+6 -  nguoiPhuThuoc * 1.6e+6
 * B4: Tính thuế theo mức thu nhập
 *
 * Khối 3: outputs
 * tính và xuất thuế thu nhập cá nhân
 */

 const thue_60 = 0.05
 const thue60_120 = 0.1
 const thue120_210 = 0.15
 const thue210_384 = 0.2
 const thue384_624 = 0.25
 const thue624_960 = 0.3
 const thue960 = 0.35
 var thue = document.getElementById('thue')
 // so sánh với dữ liệu và tính thuế
 function tinhThue(thuNhap, value1, value2, thueChiu) {
   var hovaTen = document.getElementById('hovaTen').value
 
   if (thuNhap > value1 && thuNhap <= value2) {
     let result = 0
     result = thuNhap * thueChiu
     return (thue.innerHTML =
       'Họ tên: ' + hovaTen + ' , ' + 'Tiền thuế: ' + result.toLocaleString())
   }
   return
 }
 function thueThuNhap() {
   var tongThuNhap = document.getElementById('tongThuNhap').value
   var parsetongThuNhap = Number(tongThuNhap)
   var nguoiPhuThuoc = document.getElementById('nguoiPhuThuoc').value
   var thuNhap = parsetongThuNhap - 4e6 - nguoiPhuThuoc * 1.6e6
 
   // kiểm tra và in kết quả
 
   if (hovaTen === '' || tongThuNhap === '' || nguoiPhuThuoc === '') {
    alert("Vui lòng nhập vào trường dữ liệu còn thiếu")
   } else {
     tinhThue(thuNhap, 0, 60e6, thue_60)
     tinhThue(thuNhap, 60e6, 120e6, thue60_120)
     tinhThue(thuNhap, 120e6, 210e6, thue120_210)
     tinhThue(thuNhap, 210e6, 384e6, thue210_384)
     tinhThue(thuNhap, 384e6, 624e6, thue384_624)
     tinhThue(thuNhap, 624e6, 960e6, thue624_960)
     tinhThue(thuNhap, 960e6, Infinity, thue960)
   }
 }
 document.getElementById('btnTienThue').onclick = thueThuNhap
 