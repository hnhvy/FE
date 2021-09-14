
function NguoiDungServices() {
  this.getListUser = () => {
    return axios({
      method: 'GET',
      url: 'https://6131a7347287b70017e6418f.mockapi.io/qlnd'
    })
  }
  this.addUser = (item) => {
    return axios({
      method: 'POST',
      url: 'https://6131a7347287b70017e6418f.mockapi.io/qlnd',
      data: item
    })
  }
  this.seeUser = (id) => {
    return axios({
      method: 'GET',
      url: `https://6131a7347287b70017e6418f.mockapi.io/qlnd/${id}`,
      data: id
    })
  }
  this.updateUser = (item, id) => {
    return axios({
      method: 'PUT',
      url: `https://6131a7347287b70017e6418f.mockapi.io/qlnd/${id}`,
      data: item
    })
  }
  this.deleteUser = (id) => {
    return axios({
      method: 'DELETE',
      url: `https://6131a7347287b70017e6418f.mockapi.io/qlnd/${id}`,
    })
  }
}