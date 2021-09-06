function DanhSachNhanVien() {
  this.mangNV = []
  // thêm các giá trị thuộc tính vào mảng mangNV
  this.themHienThiDanhSachNV = function (nv) {
    this.mangNV.push(nv)
  }
  //tìm vị trí nhân viên
  this.findEmploy = function (account) {
    let i = -1
    this.mangNV.map((item, index) => item.account == account ? i = index : i)
    return i
  }

  //xóa nhân viên
  this.delete = function (account) {
    let index = this.findEmploy(account)
    if (index < 0) return
    this.mangNV.splice(index, 1)
  }
  // cập nhập nhân viên
  this.update = function (employee) {
    let index = this.findEmploy(employee.account)
    if (index < 0) return
    this.mangNV[index] = employee
  }
  // tìm nhân viên
  this.search = function (key) {
    let newArrayEmploy = []
    //từ khóa search về chữ thường
    let lowerKey = key.trim().toLowerCase()
    this.mangNV.map((item) => {
      // giá trị trong form thành chữ thường
      let valueLower = item.ratingEmployee.trim().toLowerCase()
      let result = valueLower.indexOf(lowerKey)
      if (result < 0) return
      newArrayEmploy.push(item)
    })
    return newArrayEmploy
  }

}