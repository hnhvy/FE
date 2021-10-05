import React, { Component } from 'react'
import styleModule from './Banner.module.css'
export default class Banner extends Component {
  render() {
    return (
      <section className={`${styleModule.sectionBanner} py-5 `}>
        <div className="container px-lg-5">
          <div className="p-4 px-lg-1 py-lg-4 bg-light rounded-3 ">
            <div className="m-4 m-lg-5">
              <h1 className={styleModule.bannerTitle}>A warm welcome!</h1>
              <p className="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi cumque alias repellendus quisquam dignissimos, corrupti quaerat atque quasi architecto necessitatibus porro placeat</p>
              <a className="btn btn-primary btn-lg" href="#!">Call to action</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
