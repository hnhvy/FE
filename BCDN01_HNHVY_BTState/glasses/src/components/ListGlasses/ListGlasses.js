import React, { Component } from 'react';
import data from '../../data/data'
class ListGlasses extends Component {
  //render ra các loại kính 
  getGlasses() {
    return (
      data.map((item) => {
        return (
          <div className="col-xl-2 col-lg-3 col-sm-4 col"
            key={item.id}
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.props.handleChange(item)
            }}
          >
            <img src={item.url} alt="" className="img__glasses" />
          </div>
        )
      })
    )
  }
  render() {
    return (
      <div className="col-12 py-2 my-sm-5 my-3 bg-light rounded">
        <div className="row text-sm-center text-center">
          {this.getGlasses()}
        </div>
      </div>
    );
  }
}

export default ListGlasses;