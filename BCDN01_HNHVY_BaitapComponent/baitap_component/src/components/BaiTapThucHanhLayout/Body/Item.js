import React, { Component } from 'react';
import styleItemModule from './Item.module.css'
class Item extends Component {
  render() {
    return (
      <div className={`${styleItemModule.itemBottom} card text-white bg-white`}>
        <img className="card-img-top" src="./img/sky.png" alt="500x325" style={{ width: "100%", height: '200px' }} />
        <div className="card-body text-center">
          <h4 className="card-title text-dark font-weight-bold">Card title</h4>
          <p className="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae optio qui. Nisi hic qui ipsum vitae eveniet vel minus officiis! Sint nam tenetur sit nisi itaque libero veniam vero?</p>

        </div>
        <div className=" py-2 text-center border-top" style={{ backgroundColor: '#6c757d12' }}>
          <button className="btn btn-primary">Find Out More!</button>
        </div>
      </div>
    );
  }
}

export default Item;