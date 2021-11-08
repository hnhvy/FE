import React, { Component } from 'react';
import SelectedListChair from '../components/Selected/SelectedListChair';
import ListChair from '../components/Unselected/ListChair';

class MovieOffices extends Component {
  render() {
    return (
      <div style={{ background: "url('./img/bgmovie.jpg')", backgroundSize: '100%', position: 'fix', width: '100vw', height: '100vh', backgroundRepeat: 'no-repeat', }}>
        <div style={{ backgroundColor: '#212529bd', position: 'fix', width: '100vw', height: '100vh' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-8 my-2">
                <h1 className="text-center text-warning">ĐẶT VÉ XEM PHIM QĐT.VN</h1>
                <div className="d-flex justify-content-center">
                  <div className="screen"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <ListChair />
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <SelectedListChair />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieOffices;