import React, { Component } from 'react';

class ModalShoe extends Component {
  render() {
    let { infoDetail } = this.props
    return (
      <div className="p-0 modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Information's Shoe </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-6">
                  <img className="w-100" src={infoDetail.image} alt="" />
                </div>
                <div className="col-6">
                  <h5>{infoDetail.name}</h5>
                  <p>Price: {infoDetail.price} $</p>
                  <p>{infoDetail.shortDescription}</p>
                  <p>Quantity: <span>{infoDetail.quantity}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalShoe;