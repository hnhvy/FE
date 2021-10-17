import React, { Component } from 'react';
import ListShoe from '../components/ListShoe';
import Header from '../layouts/Header';
import Shop from '../layouts/Shop';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row my-2">
            <div className="col-md-12 col-lg-3">
              <div className="nav flex-lg-column flex justify-content-center nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link py-2 active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"  >Home</a>
                <a className="nav-link py-2" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false" >Shop</a>
              </div>
            </div>
            <div className=" col-md-12 col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <Header />
                  <ListShoe />
                </div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <Shop />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;