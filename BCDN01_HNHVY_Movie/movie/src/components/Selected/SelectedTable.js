import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleDeleteChair } from '../../redux/action/ActionMovie';

class SelectedTable extends Component {
  renderTableSelectingChair = () => {
    return this.props.listChair.map((chair, index) => {
      return <tr key={index}>
        <td className="text-light">{chair.soGhe}</td>
        <td className="text-success">{chair.gia.toLocaleString()}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.dispatch(handleDeleteChair(chair))
            }}
          >X
          </button>
        </td>
      </tr>
    })
  }
  render() {
    return (
      <div className="scroll-table">
        <table className="table" border="2">
          <thead>
            <tr>
              <th className="text-light">Số Ghế</th>
              <th className="text-success">Giá</th>
              <th className="text-danger">Hủy</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableSelectingChair()}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td className="text-light">
                Tổng tiền:
                {this.props.listChair.reduce((total, chair) => {
                  return total += chair.gia
                }, 0).toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listChair: state.BookChairReducer.listChair
  }
}

export default connect(mapStateToProps)(SelectedTable);