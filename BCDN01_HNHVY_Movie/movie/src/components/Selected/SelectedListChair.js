import React, { Component } from 'react'
import SelectedTable from './SelectedTable'

export default class SelectedListChair extends Component {
  render() {
    return (
      <div className="my-3">
        <h1 className="text-light text-center" style={{ fontSize: '30px' }}>DANH SÁCH GHẾ BẠN CHỌN</h1>
        <p className="text-light" style={{ fontSize: '20px' }}>
          <button className="gheDuocChon mr-2"></button>
          Ghế đã đặt
        </p>
        <p className="text-light" style={{ fontSize: '20px' }}>
          <button className="gheDangChon mr-2"></button>
          Ghế đang chọn
        </p>
        <p className="text-light" style={{ fontSize: '20px' }}>
          <button className="gheChuaChon mr-2"></button>
          Ghế chưa đặt
        </p>
        <SelectedTable />
      </div>
    )
  }
}
