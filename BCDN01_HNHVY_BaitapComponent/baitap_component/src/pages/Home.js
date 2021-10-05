import React, { Component } from 'react';
import Banner from '../components/BaiTapThucHanhLayout/Body/Banner';
import Item from '../components/BaiTapThucHanhLayout/Body/Item';
import Footer from '../components/BaiTapThucHanhLayout/Footer/Footer';
import Header from '../components/BaiTapThucHanhLayout/Header/Header';

class Home extends Component {
  render() {
    return (
      <div >
        <Header />
        <Banner />
        <div className="container px-lg-5 py-sm-5 ">
          <div className="row">
            <div className=" col-md-6 col-xl-3 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0 ">
              <Item />
            </div>
            <div className=" col-md-6 col-xl-3 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0 ">
              <Item />
            </div>
            <div className=" col-md-6 col-xl-3 mb-sm-5 ">
              <Item />
            </div>
            <div className=" col-md-6 col-xl-3 ">
              <Item />
            </div>
          </div>
        </div>
        <footer className="bg-dark">
          <div className="container py-4">
            <Footer />
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;