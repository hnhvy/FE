import React, { Component } from 'react';
import ModalShoe from './ModalShoe';

class Shoe extends Component {
  render() {
    let { shoeInfo, showInfo, infoDetail } = this.props
    return (
      <div className="card text-left">
        <img className="card-img-top" src={shoeInfo.image} alt={shoeInfo.image} />
        <div className="card-body">
          <h4 className="card-title" style={{ fontSize: '18px' }}>{shoeInfo.name}</h4>
          <p className="card-text">{shoeInfo.price} $</p>
          <button type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => showInfo(shoeInfo)}
          >
            Xem Chi Tiết
          </button>
        </div>
        <ModalShoe infoDetail={infoDetail} />
      </div>
    );
  }
}

export default Shoe