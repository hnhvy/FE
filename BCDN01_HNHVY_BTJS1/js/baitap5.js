/**
 * INPUT
 * số có 2 chữ số
 *
 *
 * Các bước
 * B1: tạo và gán giá trị cho số có 2 chữ số, số lấy hàng chục , số lấy hàng đơn vị, tổng
 * so = 56
 * soHangChuc = 0 
 * soHangDonVi = 0 
 * sum = 0 
 * B2: Tìm số hàng chục và số hàng đơn vị
 * soHangChuc = so % 10
 * soHangDonVi = Math.floor(so / 10)
 * B3: tính tổng
 * sum = soHangDonVi + soHangChuc
 *
 * Output
 * tính tổng 2 ký số vừa nhập
 *
 */

// tạo và gán giá trị
var so = 19
var soHangChuc = 0
var soHangDonVi = 0
var sum = 0
// tính số hàng chục và đơn vị
soHangChuc = Math.floor(so / 10)
soHangDonVi = so % 10
// tính tổng
sum = soHangChuc + soHangDonVi
console.log("Tổng 2 ký số của số vừa nhập là" +sum)
