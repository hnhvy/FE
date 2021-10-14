import React, { Component } from 'react'
export default class Avatar extends Component {
  render() {
    let { glasses } = this.props.item
    return (<>
      <div className="
          avatar__one
          col-lg-6 col-md-4
          text-center
          d-sm-none d-md-block d-lg-block
        ">
        <div className="img__body">
          <img src="./glassesImage/model.jpg" alt="" className="img__model" />
          <img src="./glassesImage/v2.png" alt="" className="img__model--glasses" />
        </div>
        <div className="info">
          <div className="row justify-content-between">
            <div className="col-8 model__name">GUCCI G8759H</div>
            <div className="col-4 model__name">50$</div>
            <div className="col-12 model__detail">
              Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-4 text-center">
        <div className="img__body">
          <img src="./glassesImage/model.jpg" alt="" className="img__model" />
          <img src={glasses.url} alt="" className="img__model--glasses" />
        </div>
        <div className="info">
          <div className="row justify-content-between">
            <div className="col-8 model__name">{glasses.name}</div>
            <div className="col-4 model__name">{!glasses.price ? '' : glasses.price + `$`}</div>
            <div className="col-12 model__detail">
              {glasses.desc}
            </div>
          </div>
        </div>
      </div>
    </>



    )
  }
}
