// Mô hình 3 khối
/**
 * Khối 1: inputs
 * 3 số nguyên
 * Khối 2:
 * B1: tạo và lấy giá trị người dùng nhập
 * Num1,Num2,Num3
 * B2: So sánh các giá trị với nhau
 * TH1: a > b thì đổi chỗ a với b thông qua biến temp
 * TH2: a > c thì đổi chỗ a với c thông qua biến temp
 * TH3: b > c thì đổi chỗ b với c thông qua biến temp
 * return a , b , c sau khi sắp xếp
 * Khối 3:  outputs
 * số nguyên tăng dần
 */
// bai1
document.getElementById('btnketQua').onclick = function () {
    const number_1 = document.getElementById('number1').value;
    const number_2 = document.getElementById('number2').value;
    const number_3 = document.getElementById('number3').value;

    if (number_1 === "" || number_2 === "" || number_3 === "") {
        alert("Vui lòng nhập đủ 3 số");
    } else {
        document.getElementById("ketQua").innerHTML = sort3Num(parseInt(number_1), parseInt(number_2), parseInt(number_3))
    }
}

function sort3Num(a, b, c) {
    let temp;
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    if (a > c) {
        temp = a;
        a = c;
        c = temp;
    }

    if (b > c) {
        temp = b;
        b = c;
        c = temp;
    }
    return [a, b, c];
}


// bài 2
/**
 * Khối 1: inputs
 * khai báo biến: bo,me,anh,chi,em
 *
 * Khối 2:
 * B1: Lấy các giá trị của người dùng chọn
 * B2: so sánh giá trị người dùng chọn
 * B3: xuất ra kết quả chào
 *
 * Khối 3: outputs
 * Chào thành viên trong gia đình
 */


document.getElementById('btnChao').onclick = function () {
    // tạo và
    var select = document.getElementById('select').value
    var chon = document.getElementById('ai').value
    var bo = document.getElementById('bo').value
    var me = document.getElementById('me').value
    var anh = document.getElementById('anh').value
    var chi = document.getElementById('em').value
   
  
    var chao = document.getElementById('guiLoiChao')
    switch (select) {
      case chon:
        alert("Vui lòng chọn");
        break
      case bo:
        chao.innerHTML = 'Chào bố'
        break
      case me:
        chao.innerHTML = 'Chào mẹ'
        break
      case anh:
        chao.innerHTML = 'Chào anh trai'
        break
      case chi:
        chao.innerHTML = 'Chào em gái'
        break
      default:
        chao.innerHTML = ''
    }
  }
  
//Bài 3
/**
 * Khối 1: inputs
 * 3 số nguyên bất kì
 * Khối 2:
 * B1: tạo biến và lấy các giá trị người dùng nhập vào là num1, num2, num3
 * B2: tạo biến chẵn,lẽ
 * B3: cho chạy lệnh if nếu các số chia hết cho 2 thì cộng chẵn lên 1 đơn vị (chan++)
 * B4: cho chạy lệnh if nếu các số không chia hết cho 2 cộng lẽ lên 1 đơn vị (le++)
 * B3: Điều kiện nhập vào của người dùng
 * B4: Xử lý button sau khi click vào thì sẽ in ra kết quả
 * Khối 3: outputs
 * Tổng số chẵn,số lẻ
 */
 document.getElementById('btnChanLe').onclick = function () {
    // tạo biến và lấy giá trị
    var num1 = document.getElementById('num1').value
    var num2 = document.getElementById('num2').value
    var num3 = document.getElementById('num3').value
  
    // tạo biến chẵn, lẻ
    var chan = 0
    var le = 0
    // kiểm tra giá trị người dùng nhập
    if (Number(num1) % 2 === 0) {
      chan++
    } else {
      le++
    }
    if (Number(num2) % 2 === 0) {
      chan++
    } else {
      le++
    }
    if (Number(num3) % 2 === 0) {
      chan++
    } else {
      le++
    }
   // ketqua sau khi click
    var result = document.getElementById('soChanLe')
    if (num1 === "" || num2 === "" || num3 === "") {
        alert("Vui lòng nhập đủ 3 số");
    } 
    else {
      result.innerHTML =
       'Có ' + chan + ' số chẵn và' + le + ' số lẻ'
    }
  }
  
// bài 4
/**
 * Khối 1: inputs
 * Độ dài 3 cạnh
 *
 * Khối 2:
 * B1: Lấy giá trị người dùng nhập vào canh1,canh2,canh3
 * B2: Kiểm tra nhập giá trị
 * B3: Xem là tam giác gì 
 * canh1 = canh2 = canh3 đó là tam giác đều
 * canh1 = canh2 != canh3  đó là tam giác cân
 * Math.pow(canh1, 2) ==  Math.pow(canh2, 2) + Math.pow(canh3, 2) ||
 * Math.pow(canh2, 2) ==  Math.pow(canh1, 2) + Math.pow(canh3, 2) ||
 * Math.pow(canh3, 2) ==  Math.pow(canh1, 2) + Math.pow(canh2, 2) 
 thì là tam giác vuông
 * Cuối cùng là tam giác thường
 *
 * Khối 3: outputs
 * tam giác đó là tam giác gì
 */

 document.getElementById('btnTamGiac').onclick = function () {
    // tạo biến và lấy giá trị người dùng nhập
    var canh1 = document.getElementById('canh1').value
    var canh2 = document.getElementById('canh2').value
    var canh3 = document.getElementById('canh3').value
    // in kết quả
    var txtGuess = document.getElementById('ketQuaTamGiac')
    if (canh1 === '' || canh2 === '' || canh3 === '') {
        alert("Vui lòng nhập đủ số đo 3 cạnh");
    } else if (canh1 === canh2 && canh1 === canh3) {
      txtGuess.innerHTML = 'Đây là tam giác đều'
    } else if (canh1 === canh2 || canh1 === canh3 || canh2 === canh3) {
      txtGuess.innerHTML = 'Đây là tam giác cân'
    } else if (
        Math.pow(canh1, 2) ==  Math.pow(canh2, 2) + Math.pow(canh3, 2) ||
        Math.pow(canh2, 2) ==  Math.pow(canh1, 2) + Math.pow(canh3, 2) ||
        Math.pow(canh3, 2) ==  Math.pow(canh1, 2) + Math.pow(canh2, 2)
    ) {
      ketQuaTamGiac.innerHTML = 'Đây là tam giác vuông'
    } else {
      ketQuaTamGiac.innerHTML = 'Đây là tam giác thường'
    }
  }
  