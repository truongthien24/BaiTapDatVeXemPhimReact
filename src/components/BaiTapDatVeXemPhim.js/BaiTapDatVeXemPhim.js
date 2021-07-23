import React, { Component } from 'react'
import DatVe from './DatVe'
import DanhSachDatVe from './DanhSachDatVe'
import './BaiTapBookingTicket.css'
export default class BaiTapDatVeXemPhim extends Component {
    render() {
        return (
            <div style={{backgroundImage: "url('./img/bgmovie.jpg')", width: '100%', height: '800px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', zIndex: '0'}}>
                <div className="overlay" style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.65)', position: 'absolute', zIndex: '0'}}></div>
                <div className="container-fluid" style={{zIndex: '2', position: 'absolute'}}>
                    <div className="row">
                        <div className="col-8">
                            <DatVe/>
                        </div>
                        <div className="col-4">
                            <DanhSachDatVe/>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }
}
