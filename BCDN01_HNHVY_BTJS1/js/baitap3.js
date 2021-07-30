/**
 * Input
 * giá USD : 23.500đ
 *
 * Các bước
 * B1: tạo và gán giá trị cho tiền mỹ, và giá trị quy đổi từ mỹ sang việt
 * var tienMy = 9
 * var tiGia = 23500
 * var tienViet
 * B2: tính số tiền quy đổi được từ mỹ sang việt nam
 * tienViet = tienMy * tiGia
 *
 *
 * Output
 * tính và xuất ra số tiền sau quy đổi
 */

// tạo và gán giá trị
var tienMy = 9
var tiGia = 23500
var tienViet = 0
//  tính tiền quy đổi
tienViet = tienMy * tiGia
console.log('Số tiền sau khi quy đổi : ' + tienViet);
