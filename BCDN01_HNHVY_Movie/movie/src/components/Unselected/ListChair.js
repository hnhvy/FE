import React, { Component } from 'react';
import { data } from '../../data/data'
import Chair from './Chair';
class listChair extends Component {

  renderchairs = () => {
    return data.map((chair, index) => {
      return <Chair infoChair={chair} key={index} />
    })
  }
  render() {
    return (
      <div>
        {this.renderchairs()}
      </div>
    );
  }
}

export default listChair;