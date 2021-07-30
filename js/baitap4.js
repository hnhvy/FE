/**
 * Input
 * chiều dài, chiều rông hình chữ nhật
 * length, width
 *
 *
 *
 * Các bước
 * B1: tạo và gán giá trị cho chiều dài,chiều rộng, chu vi, S của hình chữ nhật
 * dai  = 9
 * rong  = 5
 * chuVi = 0
 * dienTich = 0
 * B2: tính chu vi hcn
 * chuVi = (dai + rong) * 2
 * dienTich = dai * rong
 *
 *
 * Output
 * giá trị chu vi, diện tích hình chữ nhật
 *
 */

// tạo và gán giá trị
var dai = 9
var rong = 5
var chuVi = 0
var dienTich = 0
// tính chu vi
chuVi = (dai + rong) * 2
console.log("Chu vi hình chữ nhật là :" + chuVi)
// tính diện tích
dienTich = dai * rong
console.log("Diện tích hình chữ nhật là :" + dienTich)
