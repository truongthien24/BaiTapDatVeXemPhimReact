import React, { Component } from 'react'
import {connect} from 'react-redux'

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((item, index) => {
            let cssGheDaChon = 'gheTrong';
            let disable = false;

            if (item.daDat) {
                cssGheDaChon = 'gheDuocChon';
                disable = true;
            }

            //Xét trạng thái ghế đang đặt
            // let cssGheDangChon = '';
            let indexDanhSachGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === item.soGhe);

            if(indexDanhSachGheDangDat !== -1) {
                cssGheDaChon = 'gheDangChon'
            }
            

            return <td className="text-white">
                <button onClick={() => {
                    this.props.ChonGhe(item)
                }} disabled={disable} className={`${cssGheDaChon}`} key={index}>
                    {index + 1}
                </button>
            </td>
        })
    }

    renderHangGhe = () => {
            if(this.props.soHangGhe === 0) { 
               return this.props.hangGhe.danhSachGhe.map((item,index)=> {
                   return <td>
                       <span className="rowNumber">{item.soGhe}</span>
                   </td>
               })
            }

            else {
               return this.renderGhe();
            }
    }

    render() {
        return (
            <tr>
                <td className="text-white">{this.props.hangGhe.hang}</td>
                {this.renderHangGhe()}
            </tr>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.DatVeXemPhim.danhSachGheDangDat,
    }
}

const mapDisPatchToPops = (dispatch) => {
    return {
        ChonGhe: (ghe) => {
            const action = {
                type: 'CHON_GHE',
                payload: ghe,
            }
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps,mapDisPatchToPops)(HangGhe)