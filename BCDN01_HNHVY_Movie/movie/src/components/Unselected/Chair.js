import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleBooking } from '../../redux/action/ActionMovie';

class Chair extends Component {

  renderRowChair = () => {
    let { infoChair } = this.props

    return infoChair.danhSachGhe.map((numberChair, index) => {
      let cssChair = ''
      let cssSelectedChair = ''
      let cssSelectingChair = ''
      if (numberChair.daDat === undefined) {
        cssChair = 'firstChar'
      } else {
        cssChair = 'gheChuaChon'
        numberChair.daDat ? cssSelectedChair = 'gheDuocChon' : cssSelectedChair = ''
      }
      let indexSelectingChair = this.props.listChair.findIndex(item => item.soGhe === numberChair.soGhe)
      indexSelectingChair !== -1 ? cssSelectingChair = 'gheDangChon' : cssSelectingChair = ''
      return <button
        key={index}
        className={` mx-1 my-1 text-center ${cssChair} ${cssSelectedChair} ${cssSelectingChair}`}
        disabled={numberChair.daDat ? true : false}
        onClick={() => {
          this.props.dispatch(handleBooking(numberChair))
        }}
      >
        {numberChair.soGhe}
      </button>
    })
  }


  render() {
    return (
      <div >
        <div className="row justify-content-around  text-warning " >
          <div className="mr-1 d-flex align-items-center">
            {this.props.infoChair.hang}
          </div>
          {this.renderRowChair()}
        </div>
      </div >
    );
  }
}
const mapStateToProps = state => {
  return {
    listChair: state.BookChairReducer.listChair
  }
}

export default connect(mapStateToProps)(Chair);