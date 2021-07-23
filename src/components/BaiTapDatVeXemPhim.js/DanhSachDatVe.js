import React, { Component } from 'react'
import {connect} from 'react-redux'

class DanhSachDatVe extends Component {

    renderTable = () => {
        return this.props.danhSachGheDangDat.map((item,index)=> {
            return <tr key={index} style={{textAlign: 'center'}} className="text-warning">
                <td>{item.soGhe}</td>
                <td>{item.gia.toLocaleString()}</td>
                <td>
                    <button className="text-danger btn" onClick={()=> {
                        this.props.xoaGhe(item)
                    }}>&times;</button>
                </td>
            </tr>
        })
    }

    renderTongGia = () => {
        let tongTien = 0;
        let {danhSachGheDangDat} = this.props
        for(let item of danhSachGheDangDat) {
            tongTien += item.gia; 
        }
        // // tongTien = Number(tongTien).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        // console.log(typeof(tongTien));
        return tongTien.toLocaleString();
    }

    render() {
        return (
            <div className="d-flex" style={{flexDirection: 'column'}}>
                <h3 className="text-warning my-3 mb-3 danhSachDatVe__heading" style={{textTransform: 'uppercase'}}>Danh Sách ghế đã chọn</h3>
                <div className="danhSachDatVe__note-list">
                    <div className="danhSachDatVe__note-item">
                        <div className="gheDuocChon mr-2" style={{width: '35px', height: '35px'}}></div>
                        Ghế đã đặt
                    </div>
                    <div className="danhSachDatVe__note-item">
                        <div className="gheDangChon mr-2" style={{width: '35px', height: '35px'}}></div>
                        Ghế đang chọn
                    </div>
                    <div className="danhSachDatVe__note-item">
                        <div className="gheTrong mr-2" style={{width: '35px', height: '35px'}}></div>
                        Ghế trống
                    </div>
                </div>
                <div style={{width: '100%', height: '477px', overflowY: 'scroll', margin: '10px 0'}}>
                    <table border="1" width="95%" cellpadding="5px">
                        <thead>
                            <tr style={{textAlign: 'center'}}>
                                <th className="text-white" width="40%">Số ghế</th>
                                <th className="text-white" width="40%">Giá</th>
                                <th className="text-white" width="20%">Huỷ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                        <tfoot>
                            <tr style={{textAlign: 'center'}}>
                                <td className="text-white">Tổng tiền: </td>
                                <td className="text-white" colSpan="2">{this.renderTongGia()}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                {/* <button className="btn btn-success mt-2" onClick={()=> {
                    {this.props.datVe(this.props.danhSachGheDangDat)}
                }}>Đặt vé</button> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.DatVeXemPhim.danhSachGheDangDat,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGhe: (ghe) => {
            const action = {
                type: 'XOA_GHE',
                payload: ghe
            }
            dispatch(action);
        },
        // datVe: (dsGhe) => {
        //     const action = {
        //         type: 'DAT_VE',
        //         payload: dsGhe
        //     }
        //     dispatch(action);
        // }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DanhSachDatVe)