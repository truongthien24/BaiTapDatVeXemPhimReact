import React, { Component } from 'react'
// import DanhSachGheData from '../../Data/danhSachGhe.json'
import HangGhe from './HangGhe'
import {connect} from 'react-redux'

class DatVe extends Component {

    renderRow = () => {
        return this.props.danhSachGheData.map((item,index)=> {
            return <HangGhe hangGhe={item} key={index} soHangGhe={index}/>
        })
    }

    render() {
        return (
            <div className="datVe__wrap d-flex align-items-center" style={{width: '80%', margin: '0 auto', flexDirection: 'column', zIndex: '100'}}>
                <h3 className="text-warning my-3" style={{textTransform: 'uppercase'}}>Đặt vé xem phim Cyberlearn.vn</h3>
                <p className="text-white">Màn hình</p>
                <div className="screen"></div>
                <table className="mt-2"  border="0" width="100%" cellPadding="10px">
                   <tbody>
                        {this.renderRow()}
                   </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheData: state.DatVeXemPhim.danhSachGheData,
    }
}

export default connect(mapStateToProps)(DatVe)


