import React, { Component } from 'react';
import data from '../data/Data';
import Shoe from './Shoe'
class ListShoe extends Component {

  state = {
    ShoeInfoDetail: {}
  }
  showInfo = (item) => {
    this.setState({
      ShoeInfoDetail: item
    })
  }
  renderShoe = () => {
    return data.map((item) => {
      return <div className="col-md-6 col-lg-6 my-3" key={item.id}>
        <Shoe shoeInfo={item} showInfo={this.showInfo} infoDetail={this.state.ShoeInfoDetail} />
      </div>
    })
  }
  render() {
    return (
      <div className="row">
        {this.renderShoe()}
      </div>
    );
  }
}

export default ListShoe;